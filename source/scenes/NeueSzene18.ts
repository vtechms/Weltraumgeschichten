namespace VisualNovel {
  export async function NeueSzene18(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.omegaXV);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Character.hide(characters.alice);
    await ƒS.update(1);
    let choices = {
      a: "Ich weiß nicht, was.",
      b: "*Das Problem näher betrachten*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Der Virus breitet sich im System aus."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      await ƒS.Speech.tell(
        characters.alice,
        "Puffff ... das war es mit den Öl beständen."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Der Computer wirkt noch normal, vereinzelt kommt es zu einem eingefrorenen Bildschirm."
      );
      await ƒS.Speech.tell(characters.narrator, "Die Konsole ist offen.");
    }

    let choices1 = {
      a: "*In die Konsole System.out.println(Hello World!) eingeben.*",
      b: "*Verschieden Methoden ausprobieren, die du kennst.*",
    };
    let selectedChoice1 = await ƒS.Menu.getInput(choices1, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice1 == choices1.a) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.happy,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.alice, "Ist das dein Ernst?");

      await ƒS.Speech.tell(
        characters.alice,
        "Netter versuch, verabschiedet euch schon mal voneinander, ihr werdet hier alle sterben."
      );
    } else if (selectedChoice1 == choices1.b) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.happy,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.alice,
        "Netter versuche, verabschiede euch schon mal voneinander, ihr werdet hier alle sterben."
      );
    }
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.sofi,
      "WAS!!!! Sterben? Mir ist doch etwas eingefallen."
    );
    await ƒS.Speech.tell(
      characters.sofi,
      "Weg da jetzt, ich habe keine Lust zu sterben."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Unternehmt doch etwas ... das wäre nicht nur das Ende von uns, sondern auch für die gesamte Internationale Gemeinschaft."
    );
    await ƒS.Speech.tell(characters.sofi, "HA! Ich habe es.");
    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Was zum Teufel ist das ...");
    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.dark,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sofi, "Hier sollte es so was nicht geben.");
    await ƒS.Speech.tell(
      characters.sofi,
      "Ahm, ich meine, hier ist etwas, was ich nicht verstehe ..."
    );
    await ƒS.Speech.tell(characters.sofi, "Es sieht aus wie ein Rätsel.");
    await ƒS.Speech.tell(
      characters.sofi,
      gameProgress.playername +
        ", helf mir SCHNELL. Da die Sicherheits-Verschlüsslung des Kernprogramms offen ist, können wir die Ausbreitung verhindern."
    );

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.alice,
      "Versuch es nur. Das wird euch dieses Mal nicht gelingen."
    );
    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.alice,
      "Über den Stick wurde eine Kopie meines Hauptprogramms importiert."
    );
    await ƒS.Speech.tell(
      characters.alice,
      "Die Installation ist fast abgeschlossen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Auf dem Bildschirm ist ein Rätsel zu erkennen."
    );
    await ƒS.Character.hide(characters.sofi);
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.alice,
      "Du hast eine gefüllte Streichholzschachtel und kommst in einen leeren, kalten Raum, in dem sich nur ein Kohleofen, eine Petroleumlampe und ein Kamin steht. Was zündest du zuerst an?"
    );

    // Gives player answer choices and lets player choose
    let choices2 = {
      a: "Kohleofen",
      b: "Petroleumlampe",
      c: "Streichholzschachtel",
      d: "Das Holz der Streichhölzer",
      e: "Ein Streichholz",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Speech.tell(
        characters.alice,
        "Um den Ofen zu entzünden, zündest du ein Streichholz an, oder nicht?"
      );
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Speech.tell(
        characters.alice,
        "Um die Petroleumlampe zu entzünden, zündest du ein Streichholz an, oder nicht?"
      );
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.c) {
      await ƒS.Speech.tell(
        characters.alice,
        "Um die Streichholzschachtel zu entzünden, zündest du ein Streichholz an, oder nicht?"
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.d) {
      await ƒS.Speech.tell(
        characters.alice,
        "Um das Holz zu entzünden, zündest du ein Streichholz an, oder nicht?"
      );
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.e) {
      await ƒS.Speech.tell(
        characters.alice,
        "Nicht schlecht, das Nächste wird nicht so einfach."
      );
    }

    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.dark,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Wer hat mich auf den Rechner geladen?"
    );

    // Gives player answer choices and lets player choose
    let choices3 = {
      a: "John",
      b: "Natascha",
      c: "David",
      d: "Dr. Miller",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.b) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.c) {
      await ƒS.Character.hide(characters.alice);
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.terrified,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.alice, "Mist Mist Mist ...");
      await ƒS.Speech.tell(characters.alice, "Mist!");
      await ƒS.Speech.tell(characters.alice, "Verdammter Mist.");
      await ƒS.Speech.tell(characters.alice, "Das bekommst du nie raus!");
    } else if (selectedChoice3 == choices3.d) {
      await ƒS.Speech.tell(
        characters.alice,
        "Echt jetzt? Der war schon lang nicht mehr dabei!"
      );
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Speech.tell(
      characters.system,
      "Verschlüsselung wurde zur Hälfte gelöst."
    );
    await ƒS.Speech.tell(
      characters.alice,
      "Ist das Glas halb leer oder ist es halb voll?"
    );

    let choices4 = {
      a: "Halb voll.",
      b: "Halb leer.",
    };
    let selectedChoice4 = await ƒS.Menu.getInput(choices4, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice4 == choices4.a) {
      await ƒS.Speech.tell(characters.alice, "Mit gefällt deine Einstellung.");
      await ƒS.Speech.tell(characters.alice, "Verdammt!");
    } else if (selectedChoice4 == choices4.b) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch.");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );

      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Speech.tell(
      characters.alice,
      "Okay, pass auf, ich wette, das bekommst du nicht raus."
    );

    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.alice, "Welche Farbe hat ein Spiegel?");
    // Gives player answer choices and lets player choose

    let choices5 = {
      a: "Weiß",
      b: "Rot",
      c: "Blau",
      d: "Schwarz",
      e: "Gelb",
      f: "Grün",
      g: "Pink",
      h: "Mischung aus Blau und Pink",
      i: "Morgen esse ich Äpfel.",
    };
    let selectedChoice5 = await ƒS.Menu.getInput(choices5, "decision"); // This choice does not influence game progress
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    console.log(selectedChoice5);

    await ƒS.Speech.tell(characters.alice, "HAHAHAHA");
    await ƒS.Speech.tell(characters.alice, "Leider falsch ...");
    await ƒS.Speech.tell(characters.alice, "Du hast verloren.");
    await ƒS.Speech.tell(characters.alice, "GAME OVER!!!!");
    await ƒS.Speech.tell(
      characters.system,
      "Fehler, unlösbare Frage festgestellt, Anfrage auf komplette Zerstörung des Planeten verwehrt."
    );
    await ƒS.Speech.tell(characters.system, "Bitte noch mal versuche.");
    await ƒS.Speech.tell(characters.alice, "Verdammt.");

    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,
      characters.alice.pose.dark,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.alice,
      "Glück gehabt, okay letzter Versuch."
    );
    await ƒS.Speech.tell(
      characters.alice,
      gameProgress.playername +
        " hält Strauße und Schafe. Insgesamt 80 Stück. Zusammen haben alle Tiere 220 Beine. Wie viele Strauße hat " +
        gameProgress.playername +
        "?"
    );

    // Gives player answer choices and lets player choose
    let choices6 = {
      a: "30",
      b: "40",
      c: "50",
      d: "60",
    };
    let selectedChoice6 = await ƒS.Menu.getInput(choices6, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice6 == choices6.a) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice6 == choices6.b) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice6 == choices6.c) {
      await ƒS.Character.hide(characters.alice);
      await ƒS.Character.show(
        characters.alice,
        characters.alice.pose.terrified,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.alice, "NEEEEIIIIIIIIINNNNN.");
      await ƒS.Speech.tell(
        characters.alice,
        "Wie konntest du nur diese Aufgabe lösen ..."
      );
      await ƒS.Speech.tell(characters.alice, "Verdammter Mist.");
      await ƒS.Speech.tell(
        characters.system,
        "Kernprogamm wurde entschlüsselt."
      );
    } else if (selectedChoice6 == choices6.d) {
      await ƒS.Speech.tell(characters.alice, "Leider falsch!");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Speech.tell(
        characters.narrator,
        "Eine gewaltige Explosion erschüttert den Planeten."
      );
      let currentScenceId = "019";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Sehr gut, weg da, ich übernehme das von hier an."
    );
    await ƒS.Speech.tell(characters.alice, "Du? Was machst du ...");
    await ƒS.Character.hide(characters.alice);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.system, "Programm abgeschaltet.");

    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Sehr gut, Sofi, ich konnte gar nicht mehr klar denken vor lauter Angst."
    );
    await ƒS.Speech.tell(
      characters.mei,
      "Du und " + gameProgress.playername + " habt unser Leben gerettet."
    );
    await ƒS.Speech.tell(
      characters.sofi,
      "Ja ja, ich wollt selber auch nicht sterben."
    );
    await ƒS.Speech.tell(
      characters.sofi,
      "Wir sind fertig hier? Ich würde gern zurück nach Trojoko."
    );
    await ƒS.Character.hide(characters.mei);
    await ƒS.Character.show(
      characters.mei,
      characters.mei.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mei,
      "Das trifft sich gut, ich möchte gern, dass ihr diesen USB-Stick den Wissenschaftlern in Trojoko gebt."
    );
    await ƒS.Speech.tell(characters.sofi, "Kein Problem, ich nehme ihn.");
    await ƒS.Speech.tell(
      characters.mei,
      "Eigentlich hätte ich gern, dass " +
        gameProgress.playername +
        " ihn nimmt und sich nochmals genauer anschaut."
    );
    await ƒS.Speech.tell(characters.sofi, "Mhh ... okay.");
    await ƒS.Speech.tell(
      characters.sofi,
      "Ich geh dann schon mal raus, ich brauch etwas Luft."
    );

    await ƒS.Speech.tell(characters.sofi, "Sehen uns auf dem Schiff.");
    await ƒS.Character.hide(characters.sofi);
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Sofi verlässt den Raum und du bist mit Mei Misaki Noranus allein."
    );

    await ƒS.update(1);
  }
}
