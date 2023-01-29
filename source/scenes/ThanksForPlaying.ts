namespace VisualNovel {
  export async function ThanksForPlaying(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.end);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Danke für das Spielen. Wir sind fertig!"
    );
  }
}
