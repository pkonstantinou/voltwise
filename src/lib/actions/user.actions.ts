"use server";

import { revalidatePath } from "next/cache";
import { omitBy, isNull } from "lodash";
import { connectToDB } from "../mongoose";
import { User } from "../models/user.model";
import { UserSettingsType } from "@/types";

type UpdateUserSettingsParams = {
  userId: string;
  settings: Partial<UserSettingsType>;
};

export const updateUserSettings = async ({
  userId,
  settings,
}: UpdateUserSettingsParams): Promise<void> => {
  try {
    connectToDB();

    const settingsToUpdate = omitBy(
      {
        "settings.initial_readings": settings.initial_readings
          ? settings.initial_readings
          : null,
        "settings.initial_month_year": settings.initial_month_year
          ? settings.initial_month_year
          : null,
        "settings.language": settings.language ? settings.language : null,
      },
      isNull
    );

    await User.findOneAndUpdate(
      { id: userId },
      { ...settingsToUpdate },
      { upsert: true }
    );

    revalidatePath("/settings");
  } catch (error: any) {
    throw new Error(`Failed to update user settings: ${error.message}`);
  }
};

export const getUserSettings = async (
  userId: string
): Promise<UserSettingsType> => {
  try {
    await connectToDB();

    const user = await User.findOne({ id: userId });

    const settings = {
      initial_readings: {
        day_consumption:
          user?.settings?.initial_readings?.day_consumption || "",
        night_consumption:
          user?.settings?.initial_readings?.night_consumption || "",
        total_production:
          user?.settings?.initial_readings?.total_production || "",
        outflow_production:
          user?.settings?.initial_readings?.outflow_production || "",
      },
      initial_month_year: user?.settings?.initial_month_year || "",
      language: user?.settings?.language || "el",
    };

    return settings;
  } catch (error: any) {
    throw new Error(`Failed to get user settings: ${error.message}`);
  }
};
