// Import your Hrdivision model
import Hrdivision from "../../models/Purchaseflow/divisionmaster_pf_model"; 

// Example function to fetch divisions
export const getDivisions = async () => {
  console.log('inside getdivision')
  try {
    const divisions = await Hrdivision.findAll({
      attributes: ['DIV_CODE', 'DIV_NAME'], 
    });

   
  } catch (error) {
    console.error('Error fetching divisions:', error);
  }
};