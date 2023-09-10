"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import { User } from "../models/user.model";
import { ReadingsType, UserSettingsType } from "@/types";

type UpdateIntialReadingsParams = {
  userId: string;
  initialReadings: ReadingsType;
};

export const updateInitialReadings = async ({
  userId,
  initialReadings,
}: UpdateIntialReadingsParams): Promise<void> => {
  try {
    await connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        settings: { initialReadings },
      },
      { upsert: true }
    );

    revalidatePath("/settings");
  } catch (error: any) {
    throw new Error(
      `Failed to update user settings | initialReadings: ${error.message}`
    );
  }
};

export const getUserSettings = async (
  userId: string
): Promise<UserSettingsType> => {
  try {
    await connectToDB();

    const user = await User.findOne({ id: userId });

    const settings = {
      initialReadings: {
        day_consumption: user?.settings?.initialReadings?.day_consumption || "",
        night_consumption:
          user?.settings?.initialReadings?.night_consumption || "",
        total_production:
          user?.settings?.initialReadings?.total_production || "",
        outflow_production:
          user?.settings?.initialReadings?.outflow_production || "",
      },
    };

    return settings;
  } catch (error: any) {
    throw new Error(`Failed to get user settings: ${error.message}`);
  }
};
