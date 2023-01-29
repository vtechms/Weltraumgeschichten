namespace VisualNovel {
  export async function NeueSzene04(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.Way_Ambience, 2.2, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.vaikoZuhause);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positions.bottomcenter
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(2);
    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko wohnte 2 Häuser weg von ihm; sie kennen sich schon ihr ganzes Leben."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Wenn Aiko bei einer guten Sache nicht mit machen will, hatte das meist einen Grund."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername + " kommt bei Aikos Wohnung an."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(2);

    let choices = {
      a: "*Gegen die Tür hämmern*",
      b: " *Klingeln*",
      c: "*Versuchen, die Tür aufzubrechen*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a || selectedChoice == choices.b) {
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.aiko, "Was willst du denn hier?");
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positions.bottomcenter
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.narrator,
        "Aiko erwischt dich dabei, wie du in ihre Wohnung einbrechen möchtest. Sie redet kein Wort mehr mit dir und ruft die Polizei!"
      );
      await ƒS.Character.hide(characters.aiko);
      await ƒS.update(1);
      // Jumps to game over scence
      let currentScenceId = "005";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }
    choices = {
      a: "Warum willst du uns nicht helfen?",
      b: "Wie geht es dir?",
      c: "*Keine Worte finden*",
    };
    selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.aiko, "Es ist kompliziert.");
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.aiko,
        "Gut, ich weiß, warum du hier bist, kann dir aber nicht helfen."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.aiko,
        "Ich weiß warum du hier bist, kann dir aber nicht helfen."
      );
    }
    choices = {
      a: "Ist es nicht immer kompliziert?",
      b: "Du kannst mir alles erzählen.",
      c: "*Keine Worte finden*",
    };
    selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a || selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.sprecher,
        characters.aiko.pose.talk,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.aiko,
        "Aiko vertraut dir nicht mehr und schickt dich weg."
      );
      let currentScenceId = "005";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Speech.tell(
      characters.aiko,
      "Ich erzähl dir etwas, es muss aber unser Geheimnis bleiben, hast du verstanden!"
    );
    await ƒS.Speech.tell(characters.player, "Ja, natürlich");
    await ƒS.Speech.tell(
      characters.aiko,
      "Du weißt es vermutlich nicht, aber meine Eltern gehören zu einer Gruppe der Rebellen von Trojoko."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Ich wollte nie etwas mit den Rebellen zu tun haben."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Wenn ich mich jetzt in die Sache einmische, sind meine Eltern bestimmt sauer."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Besonders, weil die IG die Rebellen unter Verdacht haben."
    );

    let choices2 = {
      a: "Wenn du uns hilfst, kannst du beweisen, dass die Rebellen unschuldig sind.",
      b: "Stell dich nicht so an, es leiden unschuldige Menschen unter diesem Virus.",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.aiko,
        "Aber, was ist, wenn sie wirklich etwas damit zu tun haben?"
      );
      await ƒS.Speech.tell(
        characters.player,
        "Ich weiß nicht, es werden aber Unschuldige verletzt."
      );
      await ƒS.Speech.tell(characters.aiko, "Du hast Recht, ich helfe euch.");
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.aiko, "Du hast Recht, ich helfe euch!");
    }

    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sprecher,
      "Nach dem Aiko zustimmt zu helfen, verabschiedete sich " +
        gameProgress.playername +
        " und ging nach Hause. Es war schon Nacht geworden und bei Nacht sind die Straßen noch unsicherer als bei Tag."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      gameProgress.playername +
        " vermied es bei Nacht noch auf den Straßen zu sein."
    );

    await ƒS.update(1);
  }
}
