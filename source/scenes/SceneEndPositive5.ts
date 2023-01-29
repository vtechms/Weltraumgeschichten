namespace VisualNovel {
  export async function SceneEndPositive5(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.vorRebellen);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.tro2, 1, true);
    // Shows background image / transitions into background image

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.rot,
      characters.rot.pose.mad,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.rot, "Wir mögen keine geschlossenen Räume");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.blau,
      characters.blau.pose.mad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.blau,
      "Falls ihr uns sucht, wir sind draußen und essen etwas Müll."
    );

    await ƒS.Character.hide(characters.rot);
    await ƒS.Character.hide(characters.blau);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
