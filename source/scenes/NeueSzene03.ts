namespace VisualNovel {
  export async function NeueSzene03(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.school_);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    await ƒS.Character.show(
      characters.lea,
      characters.lea.pose.neutral,
      ƒS.positionPercent(70, 170)
    );

    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.lea,
      "Ich weiß nicht, ob ich in diesem Team mit machen möchte, das ist doch bestimmt gefährlich."
    );
    await ƒS.Character.hide(characters.lea);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(30, 100)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.sofi,
      "Da muss ich Lea Recht geben, das ist sicherlich nichts für Studenten."
    );
    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.aiko, "Ich weiß auch nicht so recht.");
    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.sofi);
    let choices = {
      a: "Bleibt cool, lasst uns die Zwei mal  anhören.",
      b: "Ich habe auch ein sehr mulmiges Gefühl im Bauch.",
      c: "Ich würde dafür alles geben, mit solch bezaubernden Damen zusammen zu arbeiten.",
      d: "*Nichts sagen*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (
      selectedChoice == choices.a ||
      selectedChoice == choices.b ||
      selectedChoice == choices.d
    ) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.wissenschaftler,
        characters.wissenschaftler.pose.smile,
        ƒS.positionPercent(70, 110)
      );
      // Draws character on canvas (updates entire canvas)
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.wissenschaftler,
        "Tut mir leid, dass ihr warten musstet."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Speech.tell(characters.sofi, "Kleiner Schmeichler.");
      await ƒS.Speech.tell(characters.lea, "Mhhh ... Das ist doch kein Spaß!");
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.wissenschaftler,
        characters.wissenschaftler.pose.smile,
        ƒS.positionPercent(70, 110)
      );
      // Draws character on canvas (updates entire canvas)
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.wissenschaftler,
        "Tut mir leid, dass ihr warten musstet."
      );
    }
    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.lea);
    await ƒS.Character.hide(characters.wissenschaftler);
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.narrator,
      "Nach einer langen Diskussion mit den Wissenschaftlern sagten alle bis auf Aiko der Gruppe zu."
    );
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.happy,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Wir sind sehr dankbar, dass ihr uns helfen werdet, wie bereits erwähnt, glaubt die Internationale Gemeinschaft, dass Rebellen der Trojoko Fraktion etwas damit zu tun haben."
    );
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Die Hauptaufgabe besteht nun darin, Hinweise zu sichern und den Computervirus auszuschalten."
    );
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      gameProgress.playername +
        "Bitte nimm zuerst Kontakt zu Lea auf und versuch sie zu überzeugen, der Gruppe beizutreten."
    );
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Danach meldest du dich bei diesen IG Kontakten."
    );

    await ƒS.Character.hide(characters.wissenschaftler);
    await ƒS.update(1);
    ƒS.Sound.fade(sounds.Normal_Amience, 0, 1, false);
    await ƒS.update(1);
  }
}
