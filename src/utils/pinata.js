import axios from "axios";
import FormData from "form-data";

const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_KEY;

export const uploadToPinata = async (file, metadata) => {
  if (!file) return null;
};
