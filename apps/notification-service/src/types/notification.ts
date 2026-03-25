export type NotificationChannel = "EMAIL" | "SMS" | "PUSH" | "IN_APP";

export interface NotificationEvent {
  id: string;
  userId: string;
  message: string;
  channels: NotificationChannel[];
  timestamp: number;
}