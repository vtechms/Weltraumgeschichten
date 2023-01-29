namespace VisualNovel {
  export async function SceneEndPositive10(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.end);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    await ƒS.Speech.tell(
      characters.narrator,
      "Doch schon einige Wochen nach der Abschaltung kam eine unglaubliche Furchtbarkeit zurück auf den Planeten."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Bewohner bemerkten den Unterschied und stellten sich nach und nach auf die Seite der Rebellen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "IG musste einsehen, dass sie hier nicht mehr willkommen war und floh auf OmegaXV, der einige Monate später kollabierte und so gut wie die komplette Organisation auslöschte."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Unter der Führung Skaranas erlebte der Planet einen bisher nicht vorstellbaren Wohlstand, und das im Einklang mit der Natur."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die unbewohnbaren Zonen wurden nicht nur bewohnbar, sie brachten mehr landwirtschaftliche Güter als je zuvor hervor."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Menschen und Monster lebten glücklich miteinander."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko und " +
        gameProgress.playername +
        " kamen zusammen und wenn sie nicht gestorben sind, dann leben sie noch heute."
    );

    await ƒS.Character.hide(characters.sprecher);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
