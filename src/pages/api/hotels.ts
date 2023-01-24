import type { NextApiRequest, NextApiResponse } from "next";
import { mockHotels } from "../../modules/hotel/mocks/mockHotels";
import type { Hotel } from "../../modules/hotel/types/HotelType";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hotel[]>
) {
  res.status(200).json(mockHotels);
}
