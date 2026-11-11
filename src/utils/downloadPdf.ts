/**
 * Robust cross-browser and cross-origin PDF downloader.
 * Uses blob conversion to enforce the proper filename and bypass iframe sandbox restrictions,
 * with graceful fallback to native anchor download / new tab navigation.
 */
export const downloadCvPdf = async (url: string, filename: string = 'Omar_ElBasstawisy_CV_Media_Buyer.pdf'): Promise<boolean> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const blob = await response.blob();
    if (!blob || blob.size === 0) {
      throw new Error('Empty blob');
    }

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 15000);
    return true;
  } catch (err) {
    // Fallback: direct anchor trigger
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } catch {
      return false;
    }
  }
};
