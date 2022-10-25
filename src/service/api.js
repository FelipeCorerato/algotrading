import axios from "axios";
import { groupBy } from "lodash";

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 20000,
});

export const fetchSpreads = async () => {
  const { data } = await api.get("/spreads");

  const { body } = data;
  const { 1: workingHours, 2: nightShift } = groupBy(body, "spreadTypeId");

  return { workingHours, nightShift };
}