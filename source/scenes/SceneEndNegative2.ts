namespace VisualNovel {
  export async function SceneEndNegative2(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.dos);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    ƒS.Sound.play(sounds.hvd2, 2, true);

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.happy,
      ƒS.positionPercent(20, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.chan,
      "Da sind wir im Herzstück unserer Organisation. "
    );
    await ƒS.Speech.tell(
      characters.chan,
      "Willkommen in der Zentrale von der Hand von DoS."
    );

    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, gameProgress.playername);
    await ƒS.Speech.tell(characters.mike, gameProgress.playername);
    await ƒS.Speech.tell(characters.mike, gameProgress.playername);

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.normal,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Du warst mir fast nützlicher als Sofi."
    );

    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(40, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Auf keinen Fall!");

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mike,
      "Halt deine Schnauze, hat irgendjemand mit dir geredet?"
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Du redest nur, wenn du gefragt wirst."
    );

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.mike, "Hast du das verstanden?");

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.smile,
      ƒS.positionPercent(40, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sofi, "JA BOSS!");
    await ƒS.Speech.tell(characters.mike, "Das will ich doch hoffen.");
    await ƒS.Speech.tell(
      characters.mike,
      "Tut mir leid, dass David dich fast getötet hätte."
    );
    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.normal,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.mike, "Chan, bring mir die Gefangenen.");

    await ƒS.Character.hide(characters.chan);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.normal,
      ƒS.positionPercent(20, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.chan, "Wird gemacht Boss!");
    await ƒS.Speech.tell(
      characters.mike,
      "Du musst mir noch einen Gefallen tun."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Diese Dummnudel namens Aiko hat mit den Wissenschaftlern den Zugang zum Hauptnetz neu verschlüsselt."
    );
    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Ein helles Köpfchen wie du, hat vermutlich schon bemerkt, dass wir den Virus neu aufbereitet haben."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Leider sind meine Jungs nicht die Hellsten und David, der ein Händchen dafür hat, sitzt auf OmegaXV im Gefängnis."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Knacke den Code oder überzeug Aiko, dass sie dir verrät, wie man ins System kommt."
    );

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.normal,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mike,
      "Ich muss wohl nicht erwähnen, dass ein Misserfolg inakzeptabel wäre!!!"
    );
    await ƒS.Speech.tell(characters.mike, "Oder vielleicht doch?");
    await ƒS.Speech.tell(characters.player, "Ich Regel die Sache Boss!");

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.mike, "Sehr gut!");
    await ƒS.Speech.tell(
      characters.mike,
      "Jin schickt Aiko hier rein, wir warten draußen."
    );
    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.mike);
    await ƒS.update(1);

    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.talk,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Was ist hier los?");
    await ƒS.Speech.tell(characters.aiko, "Ich habe so furchtbare Angst.");

    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.angry,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Was werden die mit uns tun? Wo ist Lea und Sofi?"
    );
    await ƒS.Speech.tell(
      characters.player,
      "Sofi ist draußen und Lea habe ich bis jetzt noch nicht gesehen."
    );
    await ƒS.Speech.tell(
      characters.player,
      " Kannst du mir sagen, was ihr da genau entwickelt habt die letzten Tage?"
    );

    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.talk,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.aiko,
      "Warum willst du in so einer Situation über so etwas reden?"
    );

    let choices2 = {
      a: "Wir zwei sind doch beste Freude oder nicht? Vertrau mir einfach und sag mir, wie ich eure Sperre umgehen kann.",
      b: "*Aiko drohen*",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Character.hide(characters.aiko);
      await ƒS.Character.show(
        characters.aiko,
        characters.aiko.pose.happy,
        ƒS.positionPercent(70, 150)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.aiko,
        "Okay, du hast Recht, vermutlich hast du einen Plan, aber nicht die Zeit, ihn mir zu erklären."
      );
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Aiko bemerkt, dass es dir nur um den Netzzugang geht."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Sie redet nicht mehr mit dir."
      );
      await ƒS.Speech.tell(characters.mike, "Was für eine Enttäuschung.");
      await ƒS.Speech.tell(
        characters.narrator,
        "Mike schickt dich mit Chan vor dir Tür, du kommst nicht zurück. "
      );

      await ƒS.Character.hide(characters.aiko);
      await ƒS.update(1);
      let currentScenceId = "end-negative2";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko erzählt dir, wie man die Sperre umgehen kann und Skarn nutz die Informationen, um den Virus endgültig ins System einzuschleusen."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.angry,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Wie kannst du nur!");
    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.happy,
      ƒS.positionPercent(70, 100)
    );

    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mike,
      "Sehr gut gemacht " + gameProgress.playername
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Du wirst es bei uns bis nach ganz oben schaffen!"
    );
    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );

    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, "Wir haben gesiegt!");

    await ƒS.Character.hide(characters.mike);

    await ƒS.update(1);

    // Visual novel has reached the negative end
  }
}
