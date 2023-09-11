import { ReadingsType } from "@/types";

export const isSaveBtnDisabled = (
  savedInitialReadings: ReadingsType,
  watchedInitialReadings: ReadingsType
): boolean => {
  return (
    savedInitialReadings.day_consumption ===
      watchedInitialReadings.day_consumption &&
    savedInitialReadings.night_consumption ===
      watchedInitialReadings.night_consumption &&
    savedInitialReadings.total_production ===
      watchedInitialReadings.total_production &&
    savedInitialReadings.outflow_production ===
      watchedInitialReadings.outflow_production
  );
};

export const inputs: { name: keyof ReadingsType; label: string }[] = [
  { name: "day_consumption", label: "Ημερήσιο" },
  { name: "night_consumption", label: "Νυχτερινό" },
  { name: "total_production", label: "Παραγωγή" },
  { name: "outflow_production", label: "Εκροή" },
];

export const toastDesc = {
  success: "Οι αρχικές τιμές των μετρητών σας αποθηκεύτηκαν με επιτυχία.",
  error: "Παρουσιάστηκε πρόβλημα κατα την αποθήκευση των αρχικών σας τιμών.",
};
