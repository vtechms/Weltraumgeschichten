namespace VisualNovel {
  export async function NeueSzene00(): ƒS.SceneReturn {
    // Shows meter bar
    ƒS.Sound.play(sounds.Light_Ambience_2, 0.6, true);
    let meterBar: HTMLElement = document.querySelector("[type=interface]");
    meterBar.style.display = "";

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.subway_);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(50, 100)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(2);

    await ƒS.Speech.tell(
      characters.narrator,
      "Es war einmal ein junger Mann namens ..."
    );

    // Animates character
    await ƒS.Character.animate(
      characters.sprecher,
      characters.sprecher.pose.happy,
      middleToLeft(50, 100, 20, 100)
    );
    await ƒS.Character.animate(
      characters.sprecher,
      characters.sprecher.pose.happy,
      leftToRight(20, 100, 80, 100)
    );
    await ƒS.Character.animate(
      characters.sprecher,
      characters.sprecher.pose.happy,
      rightToMiddle(80, 100, 50, 100)
    );
    await ƒS.update();

    await ƒS.Speech.tell(characters.narrator, "Wie ist eigentlich dein Name?");

    gameProgress.playername = await ƒS.Speech.getInput(); // Gets player name
    characters.player.name = gameProgress.playername + ":"; // Saves player name

    await ƒS.Speech.tell(
      characters.narrator,
      "Sehr gut, ich werde auf die alten Jahre etwas vergesslich."
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Hier sind 2 Pillen, sie könnten dir auf deinem Weg nützlich sein."
    );

    ƒS.Inventory.add(items.greenPill);
    ƒS.Inventory.add(items.greenPill);

    await ƒS.Speech.tell(
      characters.narrator,
      "Misst, ich habe dir meine Herzpillen gegeben."
    );

    do {
      await ƒS.Speech.tell(
        characters.narrator,
        "Öffne bitte mit i dein Inventar und gebe die Pillen mir bitte zurück."
      );
    } while (ƒS.Inventory.getAmount(items.greenPill) != 0);

    gameProgress.playerScore += 30;
    await ƒS.Speech.tell(
      characters.narrator,
      "Tut mir leid für die Unterbrechung."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Es war einmal ein junger Mann namens " +
        gameProgress.playername +
        " in einer Stadt im Sternensystem XV-43 auf dem Planeten Trojoko im Jahre 2123."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Trojoko besitzt 150 Milliarden Einwohner und ist bis in die letzte Ecke bewohnt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Bewohner leiden unter der starken Umweltverschmutzung und der Überbevölkerung."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Schneller technologischer Fortschritt sorgt dafür, dass Technologien den Großteil der Wirtschaft und Entwicklung selbstständig übernehmen, ohne Zutun der Menschen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Seit den letzten Monaten verbreitet sich mehr und mehr ein mysteriöser Computervirus, der die Kontrolle über das gesamte Netzwerk übernimmt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Infrastruktur fällt aus und die Fraktionen stehen kurz vor einem Bürgerkrieg."
    );

    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername +
        " sitz auf einer Bank vor der Schule und macht ein Nickerchen."
    );

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sona, "He.. He…. HEEEEE!!!");
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.normal,
      ƒS.positionPercent(92, 30) // x, y
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(2);
    await ƒS.Character.hide(characters.sona);
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.happy,
      ƒS.positionPercent(92, 30) // x, y
    );

    // Draws character on canvas (updates entire canvas)
    await ƒS.update(2);

    await ƒS.Speech.tell(
      characters.sona,
      "Wenn du weiter schläfst, kommst zu spät zum Unterricht."
    );

    let choices = {
      a: "Wer redet hier?",
      b: "Lass mich in Ruhe Sona!",
      c: "*Das Geräusch ignorieren*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Character.hide(characters.sona);
      await ƒS.Character.show(
        characters.sona,
        characters.sona.pose.angry,
        ƒS.positionPercent(92, 30)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.sona,
        "Wer wohl? Ich bin es Sona, du hast doch nicht etwa die coolste KI der Welt vergessen."
      );
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(
        characters.sona,
        "Damit du mir später wieder Vorwürfe machen kannst, NEIN. AUFSTEHEN LALALALALA"
      );
    } else if (selectedChoice == choices.c) {
      await ƒS.Speech.tell(
        characters.sona,
        "Aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen - ich kann so den ganzen Tag weiter machen."
      );
      await ƒS.Speech.tell(
        characters.sona,
        "Aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen."
      );
    }

    choices = {
      a: "Tut mir leid Sona, ich hatte mal wieder vergessen, dass ich die Kontaktlinse noch drin habe.",
      b: "Ist ja schon gut, ich geh ja.",
      c: "Du hast gewonnen, ich geh ja schon los.",
    };
    selectedChoice = await ƒS.Menu.getInput(choices, "decision"); // Meaningless choice
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    await ƒS.Character.hide(characters.sona);
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.happy2,
      ƒS.positionPercent(92, 30)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.sona,
      "Du würdest deinen Kopf vergessen, wenn er nicht auf deinem Hals wäre. Du musst los, sonst kommst du schon wieder zu spät."
    );

    await ƒS.Speech.tell(characters.player, " Leider wahr, ich geh ja schon.");
    await ƒS.Character.hide(characters.sona);
    await ƒS.Character.show(
      characters.sona,
      characters.sona.pose.normal,
      ƒS.positionPercent(92, 30)
    );
    await ƒS.update(1);
    // ƒS.Speech.clear(); // Clears speech field

    ƒS.Sound.fade(sounds.Light_Ambience_2, 0, 1, false);
  }
}
