import FamilyHugs from "../assets/wedding/family-hugs.jpeg";
import Celebrating from "../assets/wedding/posing.webp";

export interface Party {
	title: string;
	date: string;
	description: string;
	image: ImageMetadata;
	imageAlt: string;
}

export const parties: Party[] = [
	{
		title: "Family Party",
		date: "05 September 2025",
		description:
			"We are having a party for family only the day before the wedding. Come at 3pm for a late lunch.",
		image: FamilyHugs,
		imageAlt: "Family Hugs",
	},
	{
		title: "Wedding Day",
		date: "06 September 2025",
		description: "Come at 2pm for the ceremony at 2:30pm.",
		image: Celebrating,
		imageAlt: "Celebrating",
	},
];
