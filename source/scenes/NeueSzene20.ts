namespace VisualNovel {
  export async function NeueSzene20(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.Light_Ambience_4, 0.7, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiffschlaf);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Es ist Abend, als ihr losfliegt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Dieses Mal fliegen sie mit einem  Handelsschiff zurück."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Alle sind auf ihrem Zimmer und schlafen."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "He, bist du noch wach?");
    await ƒS.Speech.tell(
      characters.sofi,
      "Ich fand es supermännlich von dir, als du uns alle gerettet hast."
    );

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.embarrassed2,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Deswegen wollte ich mich nochmals bei dir bedanken."
    );

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.embarrassed,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Würdest du mir kurz den USB-Stick geben? Ich würde gern etwas prüfen."
    );

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.embarrassed2,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    // Gives player answer choices and lets player choose
    let choices = {
      a: "Was machst du um die Uhrzeit noch? Kann das nicht warten?",
      b: "Das habe ich doch gern gemacht.",
      c: "Das habe ich nur für dich gemacht.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.sofi,
        "Nein, ich musste dich unbedingt sehen und gleich noch etwas Arbeit mit aufs Zimmer nehmen."
      );

      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.smile,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.embarrassed,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.sofi, "Du bist ja so unglaublich süß!");
    } else if (selectedChoice == choices.c) {
      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.embarrassed,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.sofi, "Du bist ja so unglaublich süß!");
      gameProgress.playerScore -= 10;
    }

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sofi, "Gibst du mir noch den USB-Stick?");

    // Gives player answer choices and lets player choose
    let choices1 = {
      a: "Lass uns das Morgen klären.",
      b: "Kommt drauf an, was ich dafür bekomme.",
      c: "Nein.",
    };
    let selectedChoice1 = await ƒS.Menu.getInput(choices1, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice1 == choices1.a) {
      await ƒS.Speech.tell(
        characters.sofi,
        "Wie wäre es denn, wenn ich dich anderweitig überzeuge."
      );

      gameProgress.playerScore += 10;
    } else if (selectedChoice1 == choices1.b) {
      await ƒS.Speech.tell(
        characters.sofi,
        "Wie wäre es denn, wenn ich dich anderweitig überzeuge."
      );
      gameProgress.playerScore -= 20;
    } else if (selectedChoice1 == choices1.c) {
      await ƒS.Speech.tell(
        characters.sofi,
        "Wie wäre es denn, wenn ich dich anderweitig überzeuge."
      );
    }

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.embarrassedA2,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Gefällt es dir?");

    await ƒS.Character.animate(
      characters.sofi,
      characters.sofi.pose.embarrassedA2,
      leftToRight(20, 100, 30, 100)
    );
    await ƒS.Character.animate(
      characters.sofi,
      characters.sofi.pose.embarrassedA2,
      rightToMiddle(30, 100, 20, 100)
    );
    await ƒS.update();

    // Gives player answer choices and lets player choose
    let choices2 = {
      a: "Du siehst verdammt scharf aus.",
      b: "Nein, mein Herz gehört einer Anderen.",
      c: "Rede weiter ...",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Character.hide(characters.sofi);

      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.embarrassedA1,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.sofi,
        "Das kann noch viel schärfer werden!."
      );

      gameProgress.playerScore -= 20;
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Character.hide(characters.sofi);

      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.embarrassedA1,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sofi,
        "Bist du dir sicher, du kannst heute von mir haben, was du willst, wenn du mir den USB-Stick gibst ..."
      );
      gameProgress.playerScore += 20;
    } else if (selectedChoice2 == choices2.c) {
      await ƒS.Character.hide(characters.sofi);

      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.embarrassedA1,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sofi,
        "Ich gebe dir eine unvergessliche Nacht und du mir den USB-Stick."
      );
    }

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile2,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Deine Entscheidung, gibst du mir den USB-Stick?"
    );

    // Gives player answer choices and lets player choose
    let choices3 = {
      a: "*Sofi den USB-Stick geben*",
      b: "*Sofi belügen, um zu bekommen, was sie verspricht, ihr aber nicht den USB-Stick geben.*",
      c: "*Sofi aus dem Zimmer werfen*",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Sofi flüchtet mit dem USB-Stick."
      );
      await ƒS.Character.hide(characters.sofi);
      await ƒS.update(1);

      let currentScenceId = "021";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.b) {
      gameProgress.playerScore -= 100;

      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.sad,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.sofi, "Na, wie hat dir das gefallen?");
      await ƒS.Speech.tell(characters.sofi, "Gibst du mir den USB-Stick noch?");
      await ƒS.Speech.tell(characters.player, "Nein, und jetzt geh!");
      await ƒS.Speech.tell(characters.sofi, "Du ekelhaftes Schwein!!!");
    } else if (selectedChoice3 == choices3.c) {
      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.sad,
        ƒS.positionPercent(20, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.sofi, "Du kannst mich mal!");
    }

    await ƒS.Character.hide(characters.sofi);

    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Als Sofi gegangen war, legte sich " +
        gameProgress.playername +
        " hin und schläft ein."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Bis plötzlich ein Geräusch über die Sprechanlage zu hören war."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);

 

    ƒS.Sound.fade(sounds.Light_Ambience_4, 0, 1, false);
    ƒS.Sound.play(sounds.space3, 1, true);

    await ƒS.Speech.tell(characters.stev, "Alle auf die Brücke!");
    await ƒS.Speech.tell(
      characters.stev,
      "Tut mir leid für die Störung, aber wir werden angegriffen!!!"
    );
    await ƒS.Speech.tell(
      characters.chan,
      "Das ist korrekt! Ergebt euch oder wir eröffnen das Feuer!"
    );
    await ƒS.Speech.tell(characters.john, "Wer spricht da?");
    await ƒS.Speech.tell(
      characters.jin,
      "Das braucht dich nicht zu kümmern, du Lackaffe."
    );
    await ƒS.Speech.tell(characters.sun, "Genau, ergebt euch oder sterbt!");
    await ƒS.Speech.tell(characters.sun, "Ihr habt 10 Minuten Zeit!");

    

    await ƒS.update(1);
  }
}
