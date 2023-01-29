namespace VisualNovel {
  export async function NeueSzene08(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.verlassen1);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(
      characters.sprecher,
      "Kurz vor ihrer Zielzone kommen sie an einen Ort, an dem sie noch nie waren."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Ein leichter Hauch von Natur in der Stadt aus Beton und Neon."
    );
    await ƒS.Character.hide(characters.sprecher);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Wo sind wir ?");
    await ƒS.Speech.tell(
      characters.player,
      "Ich glaube, das ist eine verlassene Zone, die durch die Verschmutzung nicht mehr belebt wird, lass uns schnell weiter."
    );
    await ƒS.Speech.tell(characters.aiko, "Gut, lass uns weiter.");
    await ƒS.Character.hide(characters.aiko);

    await ƒS.update(1);
  }
}
