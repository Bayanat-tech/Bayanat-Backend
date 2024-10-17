import bcrypt from "bcrypt";
import {
  ComparePasswordInterface,
  GenerateTokenInterface,
  RowData,
  TreeNode,
} from "../interfaces/cmmon.interfacte";
import jsonwebtoken from "jsonwebtoken";
import constants from "./constants";
import { StructuredResult } from "../interfaces/auth.interface";

export const comparePassword = async (args: ComparePasswordInterface) => {
  const { password, hashedPassword } = args;
  const result = await bcrypt.compare(password, hashedPassword);

  return result;
};
export const generateToken = async (args: GenerateTokenInterface) => {
  const { username, email_id, loginid } = args;

  const token = jsonwebtoken.sign(
    {
      username,
      email_id,
      loginid,
    },
    constants.AUTHENTICATION.APP_SECRET,
    {
      expiresIn: "24h",
    }
  );
  return token;
};

export const buildTree = (
  data: RowData[],
  permission: StructuredResult
): TreeNode[] => {
  const tree: Record<string, TreeNode> = {};

  data.forEach((row) => {
    const { APP_CODE, LEVEL1, LEVEL2, LEVEL3, URL_PATH } = row;

    if (!tree[APP_CODE]) {
      tree[APP_CODE] = {
        id: (permission[APP_CODE]?.serial_number ?? 0).toString(),
        title: APP_CODE,
        type: "collapse",
        icon: "AbcIcon",
        url_path: APP_CODE.toLowerCase(),
        children: [],
      };
    }

    // Find or create Level 1 (LEVEL1), using the corresponding SERIAL_NO for LEVEL1
    let level1Node = tree[APP_CODE].children!.find(
      (node) => node.title === LEVEL1
    );
    if (!level1Node && LEVEL1) {
      level1Node = {
        id: permission[APP_CODE].children[LEVEL1]?.serial_number.toString(), // Use SERIAL_NO for LEVEL1
        url_path: APP_CODE.toLowerCase(),
        title: LEVEL1,
        type: "collapse",
        icon: "AbcIcon",
        children: [],
      };
      tree[APP_CODE].children!.push(level1Node);
      tree[APP_CODE].id =
        permission[APP_CODE].children[LEVEL1]?.serial_number.toString();
    }

    // Find or create Level 2 (LEVEL2), using SERIAL_NO for LEVEL2
    if (LEVEL2 && level1Node) {
      let level2Node = level1Node.children!.find(
        (node) => node.title === LEVEL2
      );
      if (!level2Node) {
        level2Node = {
          id: permission[APP_CODE].children[LEVEL2]?.serial_number.toString(), // Use SERIAL_NO for LEVEL2
          title: LEVEL2,
          type: "collapse",
          icon: "AbcIcon",
          children: [],
        };
        level1Node.children!.push(level2Node);
      }

      // Find or create Level 3 (LEVEL3) as an "item", using SERIAL_NO for LEVEL3
      if (LEVEL3) {
        let level3Node = level2Node.children!.find(
          (node) => node.title === LEVEL3
        );
        if (!level3Node) {
          level3Node = {
            id: permission[APP_CODE].children[LEVEL3]?.serial_number.toString(), // Use SERIAL_NO for LEVEL3
            title: LEVEL3,
            url_path: URL_PATH,
            type: "item",
            icon: "AbcIcon",
          };
          level2Node.children!.push(level3Node);
        }
      }
    }
  });
  // Convert tree object to an array
  return Object.values(tree);
};
