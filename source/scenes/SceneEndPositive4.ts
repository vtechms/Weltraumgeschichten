namespace VisualNovel {
  export async function SceneEndPositive4(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.bib);
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
      characters.blau,
      characters.blau.pose.mad,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.blau, "Halt Stopp!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.rot,
      characters.rot.pose.mad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.rot,
      "Genau Stopp oder wir fressen euch auf."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.braun,
      characters.braun.pose.happy,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.braun, "Wir fressen doch keine Menschen.");
    await ƒS.Speech.tell(
      characters.rot,
      "Schnauze, das wissen die doch nicht."
    );
    await ƒS.Speech.tell(
      characters.blau,
      "Könnt ihr euch auch mal nicht streiten."
    );

    await ƒS.Character.hide(characters.blau);
    await ƒS.Character.hide(characters.rot);
    await ƒS.Character.hide(characters.braun);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.scared,
      ƒS.positionPercent(30, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Bleib ruhig, das sind Abfallmonster."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Eine Reaktion der Natur auf die Verschmutzung."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Sie fressen eigentlich nur Müll, sind aber sehr launisch."
    );
    await ƒS.Speech.tell(
      characters.skasskas,
      "Dadurch können sie auch gefährlich werden, falls sie einen nicht mögen."
    );
    await ƒS.Speech.tell(
      characters.player,
      "Kein Problem, lass mich mit ihnen reden!"
    );

    await ƒS.Character.hide(characters.skasskas);
    await ƒS.update(1);

    // Gives player answer choices and lets player choose
    let choices = {
      a: "Verschwindet ihr komischen Schleimkreaturen!",
      b: "Was macht ihr hier?",
      c: "Wir sind friedlich und nur auf der Durchreise.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Den Monstern gefällt nicht, wie du sie genannt hast, sie greifen an."
      );
      let currentScenceId = "end-positive3";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.blau,
        characters.blau.pose.mad,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.blau,
        "Blau: Die bessere Frage ist, was macht ihr hier?"
      );
      await ƒS.Speech.tell(
        characters.blau,
        "Wir haben hier schon seit Jahre keinen Menschen mehr gesehen."
      );

      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.rot,
        characters.rot.pose.mad,
        ƒS.positionPercent(30, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.rot, "Wir wollen hier keine Menschen");
    } else if (selectedChoice == choices.c) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.blau,
        characters.blau.pose.mad,
        ƒS.positionPercent(70, 100)
      );
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.rot,
        characters.rot.pose.mad,
        ƒS.positionPercent(30, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.blau,
        "Ich vertraue den Menschen nicht mehr."
      );
    }

    await ƒS.Speech.tell(
      characters.rot,
      "Die letzten Menschen haben auf uns gefeuert."
    );

    await ƒS.Speech.tell(
      characters.player,
      "Wir haben nichts gegen euch. Wir wurden beim Anflug auf den Planeten abgeschossen und sind hier abgestützt."
    );
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.braun,
      characters.braun.pose.happy,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.braun,
      "Ich glaub, er sagt die Wahrheit, das muss die Explosion von vorher gewesen sein."
    );

    await ƒS.Character.hide(characters.blau);
    await ƒS.Character.hide(characters.rot);
    await ƒS.Character.hide(characters.braun);
    await ƒS.Character.hide(characters.skasskas);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Wir sind Trojoko Rebellen und kämpfen auch für euch."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.rot,
      characters.rot.pose.mad,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.rot,
      "Was meint er mit, wir kämpfen auch für euch."
    );
    await ƒS.Speech.tell(
      characters.player,
      "Wie Kämpfen gegen die Umweltverschmutzung des Planeten."
    );

    await ƒS.Character.hide(characters.blau);
    await ƒS.Character.hide(characters.rot);
    await ƒS.Character.hide(characters.braun);
    await ƒS.Character.hide(characters.sprecher);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.braun,
      characters.braun.pose.angry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.braun,
      "Habt ihr gehört, sie haben die gleiche Mission wie wir."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.rot,
      characters.rot.pose.mad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.rot, "Wie wollt ihr das alleine machen?");
    await ƒS.Speech.tell(
      characters.player,
      "Wir haben einen USB-Stick, auf dem ist der Auslöser der Industrie ausfälle."
    );
    await ƒS.Speech.tell(
      characters.rot,
      "Ihr steht tatsächlich für dieselbe Sache ein wie wir."
    );
    await ƒS.Speech.tell(characters.rot, "Wir helfen euch!");

    await ƒS.Character.hide(characters.rot);
    await ƒS.Character.hide(characters.blau);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Unfassbar, egal wo du hingehst, findest du Freunde."
    );

    await ƒS.Character.hide(characters.skasskas);
    await ƒS.update(1);

    await ƒS.Character.hide(characters.braun);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Die Müllmonster führen die Zwei durch eine einst so feindliche Zone."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Auf dem Weg freundeten sie sich mehr und mehr an."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Unter der Führung der Monster und Skaskas kommt ihr schlussendlich am Rebellenversteck an."
    );

    await ƒS.Character.hide(characters.sprecher);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Character.hide(characters.skasskas);

    ƒS.Sound.fade(sounds.tro, 0, 1, false);
    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
