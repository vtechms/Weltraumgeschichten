namespace VisualNovel {
  export async function SceneEndPositive3(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.absturz);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );
    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.tro, 1, true);
    // Shows background image / transitions into background image

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.skasskas, "Geht es dir gut?");
    await ƒS.Speech.tell(characters.player, "Mehr oder weniger.");

    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.scared,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Stell dich nicht so an, du bist ab heute ein Rebell."
    );

    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Wir sind kurz vor der Maga City abgestürzt."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Die Bewohner nennen das auch die alte Zone."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Das hier war damals der Regierungsbereich, bis das Gebiet durch die Luftverschmutzung der anliegenden Zonen unbewohnbar wurde."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Seit der Virus die Wirtschaft stagnieren lässt, kann man hier Gott sei Dank wieder atmen."
    );
    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.scared,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.skasskas, "Wir müssen aufpassen.");
    await ƒS.Speech.tell(
      characters.skasskas,
      "Aufgrund langanhaltender Verschmutzung haben sie ansässige Kreaturen stark verändert, um sich der menschenfeindlichen Umgebung anzupassen."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Sobald wir aus dem Zentrum sind, können wir uns abholen lassen."
    );
    await ƒS.Character.hide(characters.skasskas);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.skasskas,
      "In der Basis wartet ein dir bekanntes Gesicht."
    );
    await ƒS.Speech.tell(characters.player, "Wen meinst du?");
    await ƒS.Speech.tell(characters.skasskas, "Lass dich überraschen.");

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
      "Euer Weg führt euch durch eine menschenleere Stadt - leicht angewuchert von der zurückkommenden Natur."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Vorbei an verlassenen Häusern, Läden und Kaffees."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Ruinen aus einer Zeit, als alles noch etwas überschaubarer war und nicht überdimensioniert."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Plötzlich hört ihr stimmen aus einer verlassenen Bibliothek."
    );

    await ƒS.Character.hide(characters.sprecher);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
