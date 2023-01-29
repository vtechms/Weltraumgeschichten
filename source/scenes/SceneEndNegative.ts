namespace VisualNovel {
  export async function SceneEndNegative(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.hvdSchiff);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.chan,
      "Nehmt sie alle gefangen bis auf " + gameProgress.playername
    );
    await ƒS.Speech.tell(
      characters.chan,
      "Du hast dich mehr als nützlich erwiesen, der Boss würde dich gern sprechen."
    );
    await ƒS.Speech.tell(
      characters.sofi,
      "Das hat " + gameProgress.playername + " wirklich mehr oder weniger ..."
    );

    await ƒS.Character.show(
      characters.jin,
      characters.jin.pose.happy,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.jin,
      "Wie ich gehört hab, durftest du Sofi etwas freizügiger sehen, nicht schlecht."
    );

    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Halt die Schnauze!");
    await ƒS.Speech.tell(
      characters.narrator,
      "Du fliegst mit Chan zurück nach Trojoko."
    );

    await ƒS.Character.hide(characters.jin);
    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.sofi);

    ƒS.Sound.fade(sounds.space3, 0, 1, false);
    await ƒS.update(1);

    // Visual novel has reached the negative end
  }
}
