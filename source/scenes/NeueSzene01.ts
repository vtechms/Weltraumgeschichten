namespace VisualNovel {
  export async function NeueSzene01(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.Normal_Amience, 0.4, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.school_);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    await ƒS.Speech.tell(
      characters.aiko,
      "Da bist du ja endlich, ich habe dich schon überall gesucht."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(50, 150)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Du weißt ganz genau, dass du nicht schon wieder zu spät kommen darfst."
    );

    await ƒS.Character.animate(
      characters.aiko,
      characters.aiko.pose.happy,
      scaling(1.0, 1.2)
    );

    // Animates character
    await ƒS.Character.animate(
      characters.aiko,
      characters.aiko.pose.happy,
      middleToLeft(50, 150, 40, 150)
    );
    await ƒS.Character.animate(
      characters.aiko,
      characters.aiko.pose.happy,
      leftToRight(40, 150, 60, 150)
    );
    await ƒS.Character.animate(
      characters.aiko,
      characters.aiko.pose.happy,
      rightToMiddle(60, 150, 50, 150)
    );
    await ƒS.update();

    await ƒS.Speech.tell(
      characters.aiko,
      "Ich versteh nicht, wie du so gut in Wissenschaften sein kannst, wobei du die Hälfte der Zeit mit Schlafen verbringst."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Bestimmt musste Sona dich wieder wecken."
    );
    await ƒS.Character.hide(characters.sona);
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.happy2,
      ƒS.positionPercent(92, 30)
    );
    await ƒS.update(1);

    await ƒS.Character.hide(characters.sona);
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.normal,
      ƒS.positionPercent(92, 30)
    );
    await ƒS.update(1);

    let choices = {
      a: "Als hätte ich verschlafen, ich half noch jemandem.",
      b: "Ja, Sona musste mich wieder wecken, lass uns gehen.",
      c: "Hab von dir geträumt, da wollte ich nicht aufwachen.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.angry,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sona,
        "Ich kenn dich schon viel zu lange, lüg mich doch nicht an. Los gehen wir."
      );
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);

      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.aiko,
        "Du kleine Schlafmütze, auf lass uns gehen."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy_red,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sona,
        "Ich hatte heute auch einen Traum von dir, jetzt lass uns aber los, sonst kommen wir zu spät."
      );
    }

    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);
  }
}
