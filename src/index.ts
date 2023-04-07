/// <reference types="@types/google.maps" />
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const googleMap = new CustomMap("map");
googleMap.addMarker(user);
googleMap.addMarker(company);
