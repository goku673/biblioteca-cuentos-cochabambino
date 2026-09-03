export const READING_PROGRESS_KEY = 'cochabamba-reading-progress-v1';
export const READING_PROGRESS_EVENT = 'cochabamba-reading-progress-change';
export const TOTAL_PROVINCES = 16;

const normalizeIds = (value) => {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value
      .map(Number)
      .filter((id) => Number.isInteger(id) && id >= 1 && id <= TOTAL_PROVINCES)
  )].sort((a, b) => a - b);
};

export const getCompletedProvinceIds = () => {
  if (typeof window === 'undefined') return [];

  try {
    return normalizeIds(JSON.parse(window.localStorage.getItem(READING_PROGRESS_KEY) || '[]'));
  } catch {
    return [];
  }
};

export const completeProvince = (provinceId) => {
  if (typeof window === 'undefined') return [];

  const completedIds = normalizeIds([...getCompletedProvinceIds(), provinceId]);
  window.localStorage.setItem(READING_PROGRESS_KEY, JSON.stringify(completedIds));
  window.dispatchEvent(new CustomEvent(READING_PROGRESS_EVENT, { detail: completedIds }));
  return completedIds;
};
