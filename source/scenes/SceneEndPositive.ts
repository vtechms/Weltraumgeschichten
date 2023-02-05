namespace VisualNovel {
  export async function SceneEndPositive(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiffbrücke);
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
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Der Meinung bin ich überhaupt nicht."
    );
    await ƒS.Speech.tell(characters.sofi, "Gebt den Leuten den USB-Stick.");

    await ƒS.Character.hide(characters.sofi);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.natascha,
      "Ich stimme Sofi zu, fliehen wäre Selbstmord."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.stev,
      "Ich finde seine Idee gar nicht so schlecht. Ein paar Klicks weiter treibt Weltraumschrott, wodurch wir vor dem Beschuss geschützt sind."
    );

    await ƒS.Character.hide(characters.stev);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.neutral,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.john, "Flucht ist für mich keine Option.");
    await ƒS.Character.hide(characters.natascha);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.natascha,
      characters.natascha.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.natascha,
      "Ich schlage vor, dass die Leute, die keine Lust haben zu sterben, die Fluchtkapseln bemannen und sich entweder ergeben oder versuchen, das Schiff zu übernehmen."
    );
    await ƒS.Character.hide(characters.john);
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.sad,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.john,
      "Ich bin voll und ganz Nataschas Meinung."
    );

    await ƒS.Character.hide(characters.john);
    await ƒS.Character.hide(characters.natascha);

    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Ich komme mit euch.");

    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.neutral,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.stev,
      "So soll es sein, wir versuchen zu flüchten!"
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "John, Natascha und Sofi verlassen das Schiff."
    );
    await ƒS.Character.hide(characters.sofi);
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.stev,
      "Alle festhalten, wünscht uns Glück."
    );
    await ƒS.Speech.tell(
      characters.jin,
      "Chan, das Schiff versucht zu flüchten und mehrere bemannte Fluchtkapseln kommen auf uns zu."
    );
    await ƒS.Speech.tell(
      characters.chan,
      "Ignoriert die Kapseln, verfolgt das Schiff."
    );
    await ƒS.Speech.tell(characters.sun, "Wird gemacht!");

    await ƒS.Character.show(
      characters.luna,
      characters.luna.pose.smile,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.luna,
      "Das Schiff nimmt die Verfolgung auf."
    );
    await ƒS.Speech.tell(characters.chan, "FEUER!");
    await ƒS.Speech.tell(characters.chan, "Sie feuern auf uns.");
    await ƒS.Speech.tell(characters.unbekannt, "Keine Sorge, wie helfen euch.");
    await ƒS.Speech.tell(
      characters.sun,
      "Chan, ein weiteres Schiff taucht im Sektor auf."
    );
    await ƒS.Speech.tell(
      characters.chan,
      "Es sind Trojoko Rebellen, was sollen wir tun."
    );
    await ƒS.Speech.tell(characters.jin, "Zudem nährt sich eine IG Flotte.");
    await ƒS.Speech.tell(characters.chan, "Gut, wir drehen ab!");

    await ƒS.Character.hide(characters.stev);
    await ƒS.Character.show(
      characters.stev,
      characters.stev.pose.smile,
      ƒS.positionPercent(80, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.stev, "Sie drehen ab!");
    await ƒS.Speech.tell(
      characters.unbekannt,
      "Kommt auf unser Schiff, eine große IG Flotte ist auf dem Weg hierher."
    );
    await ƒS.Speech.tell(characters.stev, "Was sollen wir tun?");

    let choices = {
      a: "*Auf die IG Flotte warten*",
      b: "*Auf das Rebellenschiff gehen*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Ihr werden von einer gewaltigen IG Flotte nach Trojoko begleitet."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Mei vertraut euch aber nicht und erklärt Sofi zur Leiterin des Projektes."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Sofi missbraucht ihre Macht und spielt einer fremden Organisation zu"
      );

      await ƒS.Character.hide(characters.natascha);
      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.hide(characters.stev);
      await ƒS.Character.hide(characters.john);
      await ƒS.Character.hide(characters.luna);
      await ƒS.update(1);

      let currentScenceId = "end-positive";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positionPercent(70, 100)
      );

      await ƒS.Character.hide(characters.natascha);
      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.hide(characters.stev);
      await ƒS.Character.hide(characters.john);
      await ƒS.Character.hide(characters.luna);
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.narrator,
        "Du begibst dich auf das Rebellenschiff, die restliche Crew bleibt auf dem Handelsschiff."
      );
      await ƒS.Speech.tell(characters.narrator, "Sie warten auf die IG Flotte.");
    }

    await ƒS.Character.hide(characters.sprecher);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
