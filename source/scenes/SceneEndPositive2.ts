namespace VisualNovel {
  export async function SceneEndPositive2(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.rebellenSchiff);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Das war eine gute Entscheidung, wir müssen hier so schnell wie möglich weg. Eine gewaltige IG Flotte ist auf dem Weg hierher."
    );
    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.suprised,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Sobald sie ein Rebellenschiff bemerken, eröffnen sie, ohne zu warten, das Feuer."
    );

    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.skasskas, "Wir müssen von hier weg.");
    await ƒS.Character.hide(characters.skasskas);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Die IG Flotte bemerkt eure Anwesenheit und eröffnet aus der Ferne das Feuer."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Kurz vor Trojoko werdet ihr multiple Male getroffen und stürzt über einem dir unbekannten Gebiet ab."
    );

    await ƒS.Character.hide(characters.sprecher);

    ƒS.Sound.fade(sounds.space3, 0, 1, false);
    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
