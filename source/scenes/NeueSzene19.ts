namespace VisualNovel {
  export async function NeueSzene19(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.omegaXV);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(
      characters.mei,
      "Ich muss sagen, ich vertrau Sofi nicht."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Sie wusste auf einmal, als es um ihr Leben ging, viel zu gut, was zu tun ist."
    );
    await ƒS.Character.hide(characters.mei);

    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.neutral,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Bevor ich dir den USB-Stick gebe, der vermutlich das Schicksal von Trojoko entscheidet, hätte ich noch ein paar Fragen, um zu verstehen, wie du eigentlich zu uns stehst."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername +
        " war etwas angespannt, als würden diese Fragen sein weiteres Schicksal beeinflussen."
    );

    await ƒS.Speech.tell(
      characters.mei,
      "Wie ist deine Einstellung zu unserem Abbau von Öl hier auf diesem Planeten?"
    );

    // Gives player answer choices and lets player choose
    let choices = {
      a: "Hauptsache Kohle.",
      b: "Ich habe hierzu keine wirkliche Meinung.",
      c: "Ihr zerstört die Natur mit den Fabriken.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore -= 30;
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(characters.mei, "Interessant.");

      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.angry,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.smile,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore += 30;
    }

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.neutral,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Ich weiß, dass du keiner Fraktion angehörst, welche interessiert dich am meisten?"
    );

    let choices2 = {
      a: "Trojoko",
      b: "Internationale Gemeinschaft ",
      c: "Eine andere Organisation",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.angry,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore += 30;
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.smile,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mei, "Interessant.");
    } else if (selectedChoice2 == choices2.c) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.sad,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore -= 30;
    }

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.neutral,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mei,
      "Aus was für einem Impuls handelst du?"
    );

    let choices3 = {
      a: "Schütz die Natur ",
      b: "Hauptsache Kohle ",
      c: "Wie es das Gesetz möchte.",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.angry,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore += 40;
    } else if (selectedChoice3 == choices3.b) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.sad,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.mei, "Interessant.");
      gameProgress.playerScore -= 40;
    } else if (selectedChoice3 == choices3.c) {
      await ƒS.Speech.tell(characters.mei, "Interessant.");
    }

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Du brauchst nicht angespannt zu sein."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Du bekommst den Stick von mir, du warst sehr ehrlich."
    );

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.caring,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Bist du eigentlich noch single? Du bist wirklich sexy!"
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Hättest du nicht mal Lust, mit mir auszugehen, sobald die Sache hier erledigt ist?"
    );

    let choices4 = {
      a: "Klar geh ich mit dir aus!",
      b: "Ich will nur frische, knackige Frauen.",
      c: "Mein Herz gehört leider schon einer Anderen",
    };
    let selectedChoice4 = await ƒS.Menu.getInput(choices4, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice4 == choices4.a) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.smile,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
    } else if (selectedChoice4 == choices4.b) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.angry,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      gameProgress.playerScore -= 50;
    } else if (selectedChoice4 == choices4.c) {
      await ƒS.Character.hide(characters.mei);
      await ƒS.Character.show(
        characters.mei,
        characters.mei.pose.sad,
        ƒS.positionPercent(70, 110)
      );
      await ƒS.update(1);
      gameProgress.playerScore += 50;
    }

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.neutral,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mei, "Okay, das werde ich mir merken.");
    await ƒS.Speech.tell(characters.mei, "Hier ist der USB-Stick.");
    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername + " hat nun einen USB-Stick im Inventar."
    );
    ƒS.Inventory.add(items.usb);
    await ƒS.Speech.tell(
      characters.mei,
      "Eines noch, gebe den USB-stick auf keinen Fall Sofi."
    );

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.surprised,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Ich hatte sie anfangs auch im Verdacht bezüglich der Bombe."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Ihre Rettungskapsel ist kurz nach Davids gestartet."
    );

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.neutral,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Fliege mit John und Natascha zurück nach Trojoko und gib den USB-stick den Wissenschaftlern und keinem Anderen!"
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Mithilfe des USB-Sticks sollten die Wissenschaftler in der Lage sein, den Virus unschädlich zu machen."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Aiko und Lea haben mit den Wissenschaftlern ein Programm geschrieben, welches in der Lage ist, den Virus vollständig zu scannen und eine Gegenmaßnahme einzuleiten. "
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Geh jetzt bitte zu Sofi, sie wartet unten beim Schiff."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Zudem wurde der Netzzugang neu verschlüsselt."
    );
    await ƒS.Speech.tell(characters.mei, "Geh jetzt.");

    await ƒS.Character.hide(characters.mei);

    ƒS.Sound.fade(sounds.ig2, 0, 1, false);
    await ƒS.update(1);
  }
}
