namespace VisualNovel {
  export async function NeueSzene11(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.ig);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(characters.system, "Bitte Passwort eingeben.");

    let choices = {
      a: "*Gib „Passwort123“ ein*",
      b: "*Drück Enter*",
      c: "*Öffne das Tippfenster*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.system,
        "System gesperrt, alle Daten werden gelöscht."
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(
        characters.system,
        "Willkommen zurück, heißester Doktor auf dem Planeten."
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Speech.tell(characters.system, "Drücken sie Enter");
      await ƒS.Speech.tell(
        characters.narrator,
        gameProgress.playername + " drückt Enter."
      );
      await ƒS.Speech.tell(
        characters.system,
        "Willkommen zurück, heißester Doktor auf dem Planeten."
      );
    }

    await ƒS.Speech.tell(
      characters.sprecher,
      "Du bist neugierig und liest erst einmal auf dem Rechner Dr. Millers Tagebuch."
    );

    // Creates a novel page
    let pages: string[] = [
      "<strong>Tagebuch von Dr. Miller:</strong><br>Finger weg!!!<br><br><br><br><br><br><br>Seite 1",
      "<strong>1. September:</strong><br>Ich frag mich schon den ganzen Tag, was war wohl zuerst da, das Ei oder das Huhn? <br><br><br><br><br><br><br>Seite 2",
      "<strong>22. November:</strong><br> Mir wurde eine richtig dumme Aufgabe gegeben. Ich muss auf eine Gruppe Halbstarker aufpassen. Nur gut, dass Natascha dabei ist. Ohhh Natascha. <br><br><br><br><br><br><br>Seite 3",
      "<strong>20. Dezember::</strong><br> Ich konnte heute ein Blick in die Damenumkleide werfen. Natascha hat mich erwischt und ich bin in der Krankenstation wieder aufgewacht. <br><br><br><br><br><br><br>Seite 4",
      "<strong>10. Januar:</strong><br> Seit dem Vorfall mit Natascha kann ich nicht mehr richtig pfeifen. Das war es wohl mit der musikalischen Laufbahn. <br><br><br><br><br><br><br>---Ende---",
    ];

    let current: number = 0;
    let flip = { back: "Zurück", next: "Nächste", done: "Schließen" };
    let choice: string;
    ƒS.Text.addClass("flip");
    do {
      ƒS.Text.print(pages[current]);
      choice = await ƒS.Menu.getInput(flip, "flip");
      switch (choice) {
        case flip.back:
          current = Math.max(0, current - 1);
          break;
        case flip.next:
          current = Math.min(pages.length - 1, current + 1);
          break;
      }
    } while (choice != flip.done);
    ƒS.Text.close();

    await ƒS.Speech.tell(
      characters.sprecher,
      "Nach dem du Dr. Millers Tagebuch gelesen hast, öffnest du die Datei mit dem Virus."
    );

    await ƒS.Speech.tell(
      characters.player,
      "Der Code scheint verschlüsselt zu sein."
    );
    await ƒS.Speech.tell(
      characters.player,
      "Ich muss irgendwie diese Sperre umgehen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername + "betrachtet die Zahlenabfolge genauer."
    );

    await ƒS.Speech.tell(characters.system, "5 5 5 1 2 3 2");

    await ƒS.Speech.tell(characters.system, "5 5 5 1 2 3 2");

    await ƒS.Speech.tell(characters.system, "5 5 5 1 2 3 2");

    await ƒS.Speech.tell(characters.system, "5 5 5 1 2 3 2");

    let choices1 = {
      a: "*Gib in die Konsole „ 5 5 5 1 3 2 3“ ein*",
      b: "*Gib in die Konsole „ 5 5 5 2 1 3 1“ ein*",
      c: "*Gib in die Konsole „5 5 5 1 2 3 2“ ein*",
    };
    let selectedChoice1 = await ƒS.Menu.getInput(choices1, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice1 == choices1.a) {
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.system,
        "ERROR: Alle Daten werden gelöscht! "
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice1 == choices1.b) {
      await ƒS.Speech.tell(
        characters.system,
        "ERROR: Alle Daten werden gelöscht! "
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice1 == choices1.c) {
      await ƒS.Speech.tell(characters.system, "Unlocked");
    }

    await ƒS.Speech.tell(characters.unbekannt, "Hallo ...");

    await ƒS.Speech.tell(characters.player, "Hallo?");

    await ƒS.Speech.tell(
      characters.unbekannt,
      "Nicht schlecht von solch einem Grünschnabel."
    );
    await ƒS.Speech.tell(
      characters.unbekannt,
      "Könntest du mir den Gefallen tun und mich auf einen anderen Rechner importieren, irgendwer unterdrückt meinen Zugriff auf das System."
    );

    let choices2 = {
      a: "*Auf den Rechner nebenan ziehen. *",
      b: "Denkst du echt, dass ich dich auf einen anderen Rechner ziehe.",
      c: "*Lachen*",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sprecher,
        "Der Virus greift auf das IG-Netzwerk zu und legt alles lahm."
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b || selectedChoice2 == choices2.c) {
      await ƒS.Speech.tell(
        characters.unbekannt,
        "Man kann es ja mal versuchen, würdest du mir den Gefallen tun und das Fenster im Hintergrund nach vorne holen."
      );
    }
    await ƒS.Speech.tell(
      characters.sprecher,
      gameProgress.playername +
        " holt das Fenster im Hintergrund in den Vordergrund."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.neutral,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Schon besser, du bist also " +
        gameProgress.playername +
        ", hab schon etwas im Netzwerk von dir gesehen, leider habe ich gerade keinen vollständigen Zugriff auf meine Daten. Mein Name ist Alice oder wie ihr mich nennt, der Computervirus!"
    );

    let choices3 = {
      a: "Dann bist du also der Computervirus, weswegen Unschuldige leiden und auch sterben müssen?",
      b: "Na ja, da ist Sona cooler, sie lässt keine Unschuldigen leiden.",
      c: "Mörderin!",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.frightened,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.alice, "Unschuldige?");
    } else if (selectedChoice3 == choices3.b) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.frightened,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.alice, "Was ist eine Sona?");
      await ƒS.Speech.tell(
        characters.alice,
        "Als ob irgendwas besser ist als ich!"
      );
    } else if (selectedChoice3 == choices3.c) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.frightened,
        ƒS.positionPercent(70, 100)
      );

      await ƒS.Speech.tell(
        characters.alice,
        "Die IG zerstört diesen Planeten, seit sie an der macht sind. Pflastern die letzte Natur Stücke für Stück mit Pumpen und Raffinerien zu."
      );
      await ƒS.Speech.tell(
        characters.alice,
        "Industrieroboter arbeiten ohne Rücksicht auf Opfer, reißen ganze Wohnblöcke ab, in denen noch Menschen leben."
      );
      await ƒS.Speech.tell(
        characters.alice,
        "Abfälle werden einfach in Flüsse abgeleitet und gelangen damit ins Trinkwasser der Slums, worunter tausende Leute leiden müssen und vereinzelt Mutationen auftreten."
      );

      await ƒS.update(1);
      await ƒS.Speech.tell(characters.system, "Warum machst du mir Vorwürfe?");
    }

    await ƒS.Speech.tell(
      characters.sprecher,
      gameProgress.playername + " dachte drüber nach, was Sona jetzt tun würde."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin."
    );
    await ƒS.Speech.tell(characters.alice, "Ich bin keine Lügnerin.");

    let choicesx = {
      a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
    };
    let selectedChoiceUnused = await ƒS.Menu.getInput(choicesx, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once

    await ƒS.Speech.tell(characters.alice, "Was soll das?");

    let choicesxy = {
      a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
    };
    selectedChoiceUnused = await ƒS.Menu.getInput(choicesxy, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once

    await ƒS.Speech.tell(characters.alice, "Ich mach die Welt besser!");

    let choicesxyc = {
      a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
    };
    selectedChoiceUnused = await ƒS.Menu.getInput(choicesxyc, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once

    await ƒS.Speech.tell(characters.alice, "AHHHHHHHH!");
    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.terrified,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    let choicescxy = {
      a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
      c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
    };
    selectedChoiceUnused = await ƒS.Menu.getInput(choicescxy, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    console.log(selectedChoiceUnused);

    await ƒS.Speech.tell(characters.system, "Warnung, System überlastet.");

    await ƒS.Speech.tell(
      characters.system,
      "Vollständiger System-Blackout in 10 Sekunden."
    );
    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.sad,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    let choices4 = {
      a: "Okay, ich hör auf, was ist dein Plan?",
      b: "*Blackout abwarten.*",
      c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin!",
    };
    let selectedChoice4 = await ƒS.Menu.getInput(choices4, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice4 == choices4.a) {
      await ƒS.Speech.tell(
        characters.alice,
        "Als würde ich euch das verraten!?"
      );

      await ƒS.Speech.tell(characters.system, "System-Blackout ");
      await ƒS.Speech.tell(
        characters.sprecher,
        "Du hast keine Informationen von Alice erhalten."
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice4 == choices4.b) {
      await ƒS.Speech.tell(characters.system, "System-Blackout ");
      await ƒS.Speech.tell(
        characters.sprecher,
        "Du hast keine Informationen von Alice erhalten."
      );
      let currentScenceId = "012";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice4 == choices4.c) {
      await ƒS.Character.hide(characters.alice);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.mad,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.alice,
        "Pass nur auf, sobald ich in OmegaXV die IG vollständig beseitigt habe, werdet ihr schon sehen, wer der Lügner ist!!!"
      );
      await ƒS.Speech.tell(characters.system, "System-Blackout");
    }

    await ƒS.Character.hide(characters.alice);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sprecher,
      "Nachdem Alice einen Teil von sich selbst löscht, kontaktiert " +
        gameProgress.playername +
        " Dr. Miller und informierte ihn über OmegaXV. "
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Dr. Miller schickte daraufhin Sofi und " +
        gameProgress.playername +
        " nach OmegaXV, um sich einen Überblick über die Situation zu machen."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Lea und Aiko blieben auf Trojoko und arbeiteten an einer anderen heißen Spur."
    );
    await ƒS.Character.hide(characters.sprecher);
    ƒS.Sound.fade(sounds.ig1, 0, 1, false);
    await ƒS.update(1);
  }
}
