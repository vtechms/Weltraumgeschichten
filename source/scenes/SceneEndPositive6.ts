namespace VisualNovel {
  export async function SceneEndPositive6(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.rebellenBasis);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_r_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Dir geht es gut, ich habe mir so große Sorgen um dich gemacht."
    );
    await ƒS.Speech.tell(
      characters.player,
      "Was machst du hier im Rebellenlager?"
    );

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_talk,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Wir sind diesen Leuten schon mal begegnet."
    );
    await ƒS.Speech.tell(
      characters.player,
      "Als wir auf dem Weg zur IG Zentrale waren."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skarana,
      "Das ist korrekt. Aikos Eltern hatten uns mitgeteilt, dass ihr Kind an einem wichtigen IG Projekt arbeitet."
    );

    await ƒS.Character.hide(characters.skarana);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.scared,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skarana,
      "Wir hatten schon früher nachgedacht, sie von unserer Sache zu überzeugen."
    );

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Als du nach OmegaXV geflogen bist, nahm Skarana Kontakt zu mir auf."
    );

    await ƒS.Character.hide(characters.skarana);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skarana,
      "Wir hatten mitbekommen, dass auf dem Flug ein Attentat geplant war, leider waren wir zu spät. Wir sind froh, dass dir nichts passiert ist."
    );
    await ƒS.Speech.tell(
      characters.skarana,
      "Eine unbekannte Organisation zieht hier die Fäden."
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko erzählte " +
        gameProgress.playername +
        " die komplette Geschichte, wie sie rausfand, dass die IG nur ihren eigenen Vorteil im Sinn hat und dass die Rebellen mit der Hilfe des Virus jetzt in der Lag sind, das Machtgefüge zu verändern."
    );
    ƒS.Sound.play(sounds.ex, 1, false);
    await ƒS.Character.hide(characters.skarana);
    await ƒS.Character.hide(characters.aiko);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    ƒS.Sound.fade(sounds.tro2, 0, 1, false);

    ƒS.Sound.play(sounds.tro3, 1, true);

    await ƒS.Speech.tell(
      characters.narrator,
      "Plötzlich eine laute Explosion."
    );

    await ƒS.Character.hide(characters.sprecher);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.skasskas,
      "Wir werden angegriffen, alle nach draußen."
    );
    await ƒS.Character.hide(characters.skarana);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
