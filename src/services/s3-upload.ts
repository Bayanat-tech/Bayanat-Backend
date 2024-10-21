import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import constants from "../helpers/constants";
import { UploadToS3ObjectInterface } from "../interfaces/cmmon.interface";

const s3Client = new S3Client({
  region: constants.AWS_S3_CREDENTIALS.REGION,
  credentials: {
    accessKeyId: constants.AWS_S3_CREDENTIALS.ACCESS_KEY,
    secretAccessKey: constants.AWS_S3_CREDENTIALS.SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async (req: any, res: any) => {
  const file = req.file;

  const fileName: string = `uploads/${new Date().getFullYear()}/${
    new Date().getMonth() + 1
  }/${file.originalname}`;

  const objectParams: UploadToS3ObjectInterface = {
    Bucket: constants.AWS_S3_CREDENTIALS.S3_BUCKET,
    Key: fileName,
    Body: file.buffer,
    ACL: "public-read",
    ContentType: file.mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(objectParams));
    const URL: string = constants.AWS_S3_CREDENTIALS.AWS_S3_URL(fileName);
    return res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: URL,
    });
  } catch (error: any) {
    return res.status(constants.STATUS_CODES.BAD_REQUEST).json({
      success: false,
      message: error.message,
    });
  }
};
