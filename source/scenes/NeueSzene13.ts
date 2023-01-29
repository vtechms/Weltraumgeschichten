namespace VisualNovel {
  export async function NeueSzene13(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.space, 1, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiff);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.igPilotin,
      characters.igPilotin.pose.happy,
      ƒS.positionPercent(15, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.igPilotin,
      "Der Flug zu OmegaXV wird etwa 3 Stunden dauern."
    );
    await ƒS.Speech.tell(
      characters.igPilotin,
      "Ist das euer erster Flug mit einem Raumschiff?"
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Nicht wirklich, mein Vater ist ein erfolgreicher Geschäftsmann!"
    );
    await ƒS.Character.hide(characters.igPilotin);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.igPilotin,
      characters.igPilotin.pose.neutral,
      ƒS.positionPercent(15, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sofi,
      "Somit hatte ich schon einige Möglichkeiten, verschiedene Planeten zu besuchen."
    );

    await ƒS.Character.hide(characters.sofi);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    let choices = {
      a: "Ja, das ist mein erster Flug.",
      b: "Nein, ich habe schon mindestens 100 Stunden im Flugsimulator verbracht.",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.igPilotin,
        "Keine Angst, bis auf Weltraumpiraten, Asteroiden oder Sabotage gibt es nichts, wovor du Angst haben musst."
      );
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.igPilotin);

      await ƒS.Character.show(
        characters.igPilotin,
        characters.igPilotin.pose.happy,
        ƒS.positionPercent(15, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.igPilotin,
        "Nicht schlecht, dann kannst du den Vogel ja fliegen?"
      );
      await ƒS.Speech.tell(characters.player, "Lieber nicht.");
      await ƒS.Speech.tell(
        characters.sofi,
        "Ja, bitte fliegen sie den Vogel, wenn " +
          gameProgress.playername +
          " fliegt, kommen wir sicher nicht heil an."
      );
      await ƒS.Speech.tell(
        characters.player,
        "Okay, besser ist es, wenn ich flieg."
      );
    }

    let choices1 = {
      a: "Sofi, was wartet wohl auf OmegaXV auf uns?",
      b: "*Ein Nickerchen machen*",
    };
    let selectedChoice1 = await ƒS.Menu.getInput(choices1, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice1 == choices1.a) {
      await ƒS.Character.hide(characters.sofi);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.sad,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.sofi,
        "Ich weiß nicht, mein Vater meinte, dass auf diesem Planeten so gut wie das gesamte Erdöl der Internationalen Gemeinschaft gefördert wird."
      );
      await ƒS.Speech.tell(
        characters.player,
        "Ich habe davon schon mal gelesen, angeblich ist die Luft durch die Förderanlagen total verunreinigt."
      );
      await ƒS.Speech.tell(
        characters.sofi,
        "Wenn interessiert die Luft, stell dir mal vor, wie viel Geld man mit den Förderanlagen verdienen kann."
      );
    } else if (selectedChoice1 == choices1.b) {
      await ƒS.Character.hide(characters.sofi);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.sad,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.sofi,
        "Wie kannst du jetzt schlafen? Es könnte dein letztes Nickerchen gewesen sein"
      );
      await ƒS.Speech.tell(characters.player, "Was meinst du damit?");
      await ƒS.Speech.tell(
        characters.sofi,
        "Ach nichts, das habe ich nur so gesagt."
      );
    }

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.igPilotin);

    await ƒS.update(1);
  }
}
