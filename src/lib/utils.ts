import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  fullName: string;
  courseSection: string;
  timestamp: string;
  status: "Present" | "Late" | "Verified";
}

/**
 * Client-Side Real CSV Export using Browser Blob API.
 * Adds UTF-8 BOM so Microsoft Excel renders it cleanly without character corruptions.
 */
export function exportAttendanceToCsv(records: AttendanceRecord[], filename = "klentro_attendance_export.csv") {
  if (!records || records.length === 0) return false;

  const headers = ["ID", "Student ID", "Full Name", "Course & Section", "Timestamp", "Status"];
  
  const csvRows = [
    headers.join(","),
    ...records.map((r) => [
      `"${r.id}"`,
      `"${r.studentId.replace(/"/g, '""')}"`,
      `"${r.fullName.replace(/"/g, '""')}"`,
      `"${r.courseSection.replace(/"/g, '""')}"`,
      `"${r.timestamp}"`,
      `"${r.status}"`
    ].join(","))
  ];

  const csvString = "\uFEFF" + csvRows.join("\r\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  return true;
}
