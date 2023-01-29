namespace VisualNovel {
  export async function NeueSzene23(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.ig3, 1, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.igbase);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Das ist ja noch mal gut gegangen, " +
        gameProgress.playername +
        " du hast hoffentlich noch den USB-Stick."
    );
    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.surprised,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.player, "Ja, den habe ich noch.");

    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.mei, "Sehr gut.");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(40, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      gameProgress.playername + ", dir geht es gut, ich bin ja so froh."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Können wir kurz das Wiedersehen verschieben, wir müssen noch kurz die ein oder andere Sache klären."
    );

    await ƒS.Speech.tell(
      characters.mei,
      "Solang wir die Sachen klären, sichern die Wissenschaftler bitte kurz die Daten auf diesen Stick, den " +
        gameProgress.playername +
        " hat."
    );

    await ƒS.Character.hide(characters.aiko);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.happy,
      ƒS.positionPercent(40, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.wissenschaftler, "Wird erledigt.");
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Ich bin gespannt, ob unser Programm funktioniert."
    );

    await ƒS.Character.hide(characters.wissenschaftlerin);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.lea,
      characters.lea.pose.smile,
      ƒS.positionPercent(20, 200)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.lea,
      "Ich hoffe, unsere Arbeit hat sich gelohnt."
    );

    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.surprised,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      gameProgress.playername +
        ", ist dir die Reise über noch etwas Merkwürdige aufgefallen?"
    );

    await ƒS.Character.hide(characters.lea);
    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);


    let choices2 = {
      a: "Nein mir ist nichts aufgefallen.",
      b: "Sofi hat sehr offensiv versucht, an den USB-Stick heranzukommen.",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Sofi kann unbemerkt wichtige Zugangsdaten stehlen und fliehen."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine fremde Organisation übernimmt die Kontrolle über das gesamte Netz. Die Gesellschaft stürzt ins Chaos."
      );
      await ƒS.Character.hide(characters.mei);
      await ƒS.update(1);

      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Speech.tell(
        characters.sofi,
        "Was habe ich? Rede dich kein Müll!"
      );
    }

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Er hat mich unsittlich angefasst, das hat er."
    );

    await ƒS.Character.hide(characters.mei);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.angry,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Erspar mich das Affentheater, John, nimm sie fest, bis wir genauere wissen."
    );
    await ƒS.Speech.tell(characters.john, "Wird gemacht Madam.");

    await ƒS.Character.hide(characters.sofi);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.happy,
      ƒS.positionPercent(40, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.wissenschaftlerin, "Ja, wir haben es.");
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Das Programm konnte den Virus fast vollständig analysieren. Hier gibt es nur noch eine kleine Hürde. Das sollte aber für " +
        gameProgress.playername +
        " kein Problem sein."
    );
    await ƒS.Speech.tell(
      characters.mei,
      gameProgress.playername +
        " löse die letzte Hürde und sicher dir ein Platz ganz oben in der IG."
    );
    await ƒS.Speech.tell(characters.player, "Wird erledigt!");

    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.hide(characters.wissenschaftlerin);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Du hast mich vielleicht zwei Mal ausgetrickst, dieses Mal wirst du es nicht schaffen"
    );
    await ƒS.Speech.tell(
      characters.system,
      "Kritisches Programm blockiert bitte wählen sie die Korrekten antworten zur Freigabe."
    );

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.dark,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.alice,
      "Verrat doch gleich die Lösungen, dumme Kuh."
    );

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Welches Tierkreiszeichen läuft vom 23. August bis 22. September?"
    );

    let choices = {
      a: "Löwe",
      b: "Jungfrau",
      c: "Wage",
      d: "Scorpion",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.alice,
        "Wild Wahl leider falsch. Verloren "
      );

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);

      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.dark,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.alice,
        "Sehr gut, das Nächste wird schwerer."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch. Verloren ");

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.d) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch. Verloren ");

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Wie viele Zähne hat ein erwachsener Mensch normalerweise?"
    );

    let choices3 = {
      a: "26",
      b: "30",
      c: "32",
      d: "36",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Speech.tell(
        characters.alice,
        "Tut mir leid, du hast Zuwenig Biss."
      );

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.b) {
      await ƒS.Speech.tell(
        characters.alice,
        "Tut mir leid, du hast Zuwenig Biss."
      );

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.c) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.dark,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.alice, "Du hast ziemlich biss.");
    } else if (selectedChoice3 == choices3.d) {
      await ƒS.Speech.tell(
        characters.alice,
        "Tut mir leid, du hast Zuviel Biss."
      );
      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Wie ist der richtige Name deiner neuen Anführerin?"
    );

    let choices4 = {
      a: "Mei Misaki Hippiebus",
      b: "Mei Misaki Uranus",
      c: "Mei Misaki Noranus",
      d: "Mei Misaki Noranis",
    };
    let selectedChoice4 = await ƒS.Menu.getInput(choices4, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice4 == choices4.a) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch. Verloren ");

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);

      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice4 == choices4.b) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch. Verloren ");

      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);

      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice4 == choices4.c) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.terrified,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.alice, "Nein! Das kann nicht sein!");
    } else if (selectedChoice4 == choices4.d) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch. Verloren ");
      await ƒS.Character.hide(characters.alice);
      await ƒS.update(1);
      let currentScenceId = "024";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.dark,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.system,
      "Kritische Programmebene wurde erfolgreich freigegeben."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(30, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Unglaublich, wie du das gemacht hast."
    );
    await ƒS.Speech.tell(characters.aiko, "Ich übernehme von hier an.");

    await ƒS.Character.hide(characters.aiko);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Unglaublich, das hätte ich niemals hinbekommen."
    );

    await ƒS.Character.hide(characters.wissenschaftlerin);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.natascha, "Der Junge hat Pfiff!");

    await ƒS.Character.hide(characters.natascha);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(30, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Ich habe jetzt die vollständige Kontrolle, " +
        gameProgress.playername +
        ", was soll ich tun."
    );
    await ƒS.Speech.tell(characters.player, "Ich deaktiviere den Virus.");

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.terrified,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.system, "Leite Gegenmaßnahmen ein.");
    await ƒS.Speech.tell(characters.system, "Bitte warten.");
    await ƒS.Speech.tell(
      characters.system,
      "Antikörper gegen den Virus werden ins System geladen."
    );

    await ƒS.Speech.tell(
      characters.system,
      "Virus wurde erfolgreich eingegrenzt und eingesperrt."
    );

    await ƒS.Character.hide(characters.alice);

    await ƒS.update(1);

    await ƒS.Speech.tell(characters.system, "Gegenmaßnahmen sind erfolgreich,");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.angry,
      ƒS.positionPercent(70, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mei, "Ihr habt es geschafft!");

    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.mei);

    await ƒS.update(1);
  }
}
