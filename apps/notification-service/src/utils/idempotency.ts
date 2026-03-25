
const processedEvents = new Set<string>();

export const isDuplicate = (id: string): boolean => {
  if (processedEvents.has(id)) {
    return true;
  }

  processedEvents.add(id);
  return false;
};