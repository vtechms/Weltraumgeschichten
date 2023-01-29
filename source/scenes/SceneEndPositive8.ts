namespace VisualNovel {
  export async function SceneEndPositive8(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.rebellenBasis);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    await ƒS.Speech.tell(
      characters.player,
      "Wir verstecken uns jetzt hier. Gibt es hier irgendwo einen Rechner?"
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skarana,
      characters.skarana.pose.scared,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.skarana, "Ja im Büro.");
    await ƒS.Speech.tell(
      characters.player,
      "Aiko, ich habe auf dem Handelsschiff ein Back-up vom USB-Stick erstellt, nimm es und versuche die KI umzuprogrammieren."
    );
    await ƒS.Speech.tell(characters.player, "Ich weiß, dass du das kannst.");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_r_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Das habe ich noch nie gemacht.");
    await ƒS.Speech.tell(
      characters.player,
      "Keine Angst, es ist genau dasselbe, als würdest du Veränderungen an Sona vornehmen."
    );

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_talk,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Wirklich?");

    await ƒS.Speech.tell(
      characters.player,
      "Ja, wir halten die Leute so lang wie möglich auf."
    );

    await ƒS.Character.hide(characters.aiko);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.h_smile,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Aber ...");
    await ƒS.Speech.tell(characters.player, "Geh schon!!!");
    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.skarana);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, "Ihr könnt nicht vor uns flüchten.");
    await ƒS.Speech.tell(characters.player, "Warum tut ihr so etwas?");

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Der Grund ist recht simpel, GELD, MACHT und FRAUEN!"
    );

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.happy2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Wir haben schon viel zulange angeschaut, wie die IG sie bereichert, jetzt sind wir dran."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Da kam es mir recht, dass einer unsere Wissenschaftler diesen Virus gefunden hat und modifiziert. "
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Mithilfe dieses Virus übernehmen wir den ganzen Planeten."
    );
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, "Genug geredet, ladet die Laser!");

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.angry,
      ƒS.positionPercent(50, 120)
    );
    await ƒS.update(1);

    await ƒS.update(1);
    await ƒS.Speech.tell(characters.chan, "Wird gemacht.");

    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );

    await ƒS.Speech.tell(characters.mike, "FEUER!");

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.skasskas,
      characters.skasskas.pose.angry,
      ƒS.positionPercent(20, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.skasskas,
      "Ihr seid nicht die Hellsten, wir haben um diesen Bereich soeben eine Energie-Freizone errichtet, eure Waffen funktionieren hier nicht."
    );

    await ƒS.Character.hide(characters.skasskas);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.jin,
      characters.jin.pose.sad,
      ƒS.positionPercent(30, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.jin,
      "Noch besser, wir brauchen keine Waffen. Auf sie!"
    );

    await ƒS.Character.hide(characters.mike);
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Du wirst von Jin mit einem rechten Haken angegriffen."
    );

    // Gives player answer choices and lets player choose
    let choices = {
      a: "*Den rechten Haken einstecken und selber einen austeilen.*",
      b: "*Ausweichen*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Character.hide(characters.jin);

      await ƒS.Speech.tell(characters.narrator, "Du hast ihm eine verpasst.");

      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.mike,
        characters.mike.pose.superangry2,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      let currentScenceId = "end-positive7";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      await ƒS.Character.hide(characters.jin);
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.mike,
        characters.mike.pose.superangry2,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.narrator,
        "Du bist ihm erfolgreich ausgewichen."
      );
    }

    await ƒS.Speech.tell(characters.narrator, "Du stehst nun neben Mike.");
    await ƒS.Speech.tell(
      characters.narrator,
      "Mike holt zu einem gewaltigen Schlag aus."
    );

    // Gives player answer choices and lets player choose
    let choices1 = {
      a: "*Einstecken und selber austeilen.*",
      b: "*Ausweichen*",
    };
    let selectedChoice1 = await ƒS.Menu.getInput(choices1, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice1 == choices1.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Mike ist viel zu erfahren und stark. Er schlägt dich bewusstlos"
      );
      await ƒS.Character.hide(characters.mike);
      await ƒS.update(1);
      let currentScenceId = "end-positive8";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice1 == choices1.b) {
      await ƒS.Character.hide(characters.mike);
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.narrator,
        "Du hast einen kurzen Moment Ruhe."
      );
    }

    // Gives player answer choices and lets player choose
    let choices2 = {
      a: "*Direkt wieder in den Kampf*",
      b: "*Schauen, wie sich die Situation entwickelt.*",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Du bist doch erschöpfter als gedacht, Chan schlägt dich bewusstlos "
      );

      let currentScenceId = "end-positive8";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Du merkst, wie dir die Kraft zum Weiterkämpfen fehlt."
      );
    }

    // Gives player answer choices and lets player choose
    let choices3 = {
      a: "*Gebt auf, es gab schon genug verletzte*",
      b: "*Auf ein Wunder hoffen*",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Mike akzeptiert eure Kapitulation nicht und schlägt dich bewusstlos."
      );

      let currentScenceId = "end-positive8";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice3 == choices3.b) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.rot,
        characters.rot.pose.mad,
        ƒS.positionPercent(30, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.rot,
        "Heee, sucht euch Leute aus, die auch aussehen wie ihr."
      );
    }

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Was zum Teufel bist du für eine Kreatur!"
    );
    await ƒS.Speech.tell(
      characters.rot,
      "Wir sind die Antikörper des Planeten, um gegen Verschmutzer wie euch vorzugehen."
    );

    await ƒS.Character.hide(characters.rot);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.blau,
      characters.blau.pose.mad,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.blau, "Attacke!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.rot,
      characters.rot.pose.mad,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.rot, "Auf sie!");

    await ƒS.Character.hide(characters.blau);
    await ƒS.Character.hide(characters.rot);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.braun,
      characters.braun.pose.angry,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.braun, "Zeigt ihnen, wo der Hammer hängt!");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.orange,
      characters.orange.pose.mad,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.orange, "Lasst sie nicht entkommen.");

    await ƒS.Character.hide(characters.orange);
    await ƒS.Character.hide(characters.braun);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.sad,
      ƒS.positionPercent(20, 130)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.chan, "Scheiße Boss, was sollen wir tun.");

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.sad2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, "Ich weiß auch ...");

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.mike, "Verdammt, ich steh in irgendwas.");

    await ƒS.Character.show(
      characters.blau,
      characters.blau.pose.mad,
      ƒS.positionPercent(90, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.blau, "Habe ich dich!");

    await ƒS.Speech.tell(
      characters.narrator,
      "Mithilfe der Müllmonster konnten die Rebellen den Angriff der Geheimenorganisation zurückschlagen."
    );
    ƒS.Sound.fade(sounds.tro3, 0, 1, false);
    ƒS.Sound.play(sounds.tro4, 1, true);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sofi, "Ihhh ... Das ist so ekelhaft!");
    await ƒS.Speech.tell(
      characters.narrator,
      "Du rennst panisch in das Zimmer, in dem Aiko ist, um zu prüfen, dass es ihr gut geht."
    );

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.hide(characters.blau);
    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.mike);
    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
