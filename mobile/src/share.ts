import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

export async function exportTextFile(filename: string, text: string, title: string) {
  if (Capacitor.isNativePlatform()) {
    await Filesystem.writeFile({
      path: filename,
      data: btoa(unescape(encodeURIComponent(text))),
      directory: Directory.Cache,
    });
    const uri = await Filesystem.getUri({
      path: filename,
      directory: Directory.Cache,
    });
    await Share.share({
      title,
      text: title,
      url: uri.uri,
      dialogTitle: title,
    });
    return;
  }

  const blob = new Blob([text], { type: filename.endsWith(".csv") ? "text/csv" : "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
