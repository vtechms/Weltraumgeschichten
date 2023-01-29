namespace VisualNovel {
  export async function NeueSzene02(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.lab);
    await ƒS.update(
      transitions.wipeTopToBottom.duration,
      transitions.wipeTopToBottom.alpha,
      transitions.wipeTopToBottom.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.happy,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Hallo zusammen, ich habe heute noch meine Kollegin mitgebracht."
    );
    await ƒS.Character.hide(characters.wissenschaftler);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.smile,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Hallo zusammen, ich freu mich heut mit dabei sein zu dürfen."
    );
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Ich habe eure Projekte von letzter Woche bereits angeschaut und muss sagen, " +
        gameProgress.playername +
        " seine Arbeit gefällt mir bis jetzt am besten."
    );

    await ƒS.Character.hide(characters.wissenschaftler);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.smile2,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Heute geht es um ein anderes Thema, ihr habt vermutlich alle mitbekommen, dass der Zugverkehr die letzte Woche komplett ausgefallen ist. "
    );
    await ƒS.Character.hide(characters.wissenschaftler);
    await ƒS.Character.hide(characters.wissenschaftlerin);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.sad,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Character.hide(characters.wissenschaftlerin);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(30, 100)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.sofi,
      "Ja, mein Vater meinte, dass dieser neuartige Computervirus, was damit zu tun haben soll."
    );

    await ƒS.Character.hide(characters.sofi);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Das ist korrekt, das ist auch der Grund, warum ich heute mit dabei bin, ich befasse mich mit neuartigen Computerviren."
    );
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Aus uns unerklärlichen Gründen wurde dieser Virus modifiziert und unerlaubt in das Hauptnetz hochgeladen."
    );
    await ƒS.Character.hide(characters.wissenschaftlerin);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.sad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Soweit wir das in der aktuellen Situation beurteilen können, handelt es sich um eine veraltete künstliche Intelligenz - basierend auf einer vergessenen Technologie der Vorzeit."
    );
    await ƒS.Speech.tell(
      characters.wissenschaftlerin,
      "Ich und mein Kollege wurden von der IG beauftrag, eine Gruppe zusammenzustellen. Leider konnten die Besten unserer Leute keinen Fortschritt erzielen."
    );
    await ƒS.Character.hide(characters.wissenschaftlerin);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftlerin,
      characters.wissenschaftlerin.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Das ist korrekt. Wir hatten die Hoffnung schon verloren, bis mir bei der Korrektur der letzten Aufgaben, als es um die Entwicklung primitiver künstlicher Intelligenz ging, einige vielversprechende Konzepte aufgefallen sind. "
    );
    await ƒS.Character.hide(characters.wissenschaftler);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.mysterious,
      ƒS.positionPercent(70, 110)
    );
    // Draws character on canvas (updates entire canvas)
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Um die Sache kurz zu machen, Aiko, Sofi, Lea und " + gameProgress.playername + ", wir würden gern mit euch nach der Stunde alleine sprechen."
    );
    await ƒS.Character.hide(characters.wissenschaftler);
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.aiko, "Was? Mit mir?");
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas

    await ƒS.Character.hide(characters.aiko);
    // Draws character on canvas (updates entire canvas)
    await ƒS.Character.hide(characters.wissenschaftlerin);
    await ƒS.update(1);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Okay.");
    await ƒS.Character.hide(characters.sofi);
    await ƒS.update(1);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas

    await ƒS.Character.show(
      characters.lea,
      characters.lea.pose.neutral,
      ƒS.positionPercent(70, 170)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.lea, "Alles klar.");
    await ƒS.update(1);
    await ƒS.Character.hide(characters.wissenschaftlerin);
    await ƒS.Character.hide(characters.lea);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas

    // Draws character on canvas (updates entire canvas)

    await ƒS.update(1);
    let choices = {
      a: "Ich kann nachher leider nicht, hab vergessen, meinen Goldfisch zu füttern.",
      b: "Alles klar.",
      c: "Wa wa wass? Tut mir leid, ich habe gerade nicht aufgepasst.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision"); // Meaningless choice
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    console.log(selectedChoice);
    await ƒS.Character.show(
      characters.wissenschaftler,
      characters.wissenschaftler.pose.mysterious,
      ƒS.positionPercent(70, 110)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.wissenschaftler,
      "Kommt nach der Stunde bitte kurz zu uns."
    );
    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);

    await ƒS.Character.hide(characters.wissenschaftler);
    await ƒS.Character.hide(characters.wissenschaftlerin);

    await ƒS.update(1);
  }
}
