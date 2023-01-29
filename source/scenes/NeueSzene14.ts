namespace VisualNovel {
  export async function NeueSzene14(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiff);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.Character.hide(characters.igPilotin);
    await ƒS.Character.hide(characters.sofi);
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Du nutzt die Zeit und schaust die auf dem Schiff um."
    );

    // Gives player answer choices and lets player choose
    let choices = {
      a: "*Mit der Pilotin reden*",
      b: "*Auf dem Passagierdeck umschauen*",
      c: "*Im Rechenzentrum umschauen*",
      d: "*Im Frachtraum umschauen*",
      e: "*Im Tankraum umschauen*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.player,
        "Wie lange arbeiten sie schon für IG"
      );
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.igPilotin,
        characters.igPilotin.pose.sad,
        ƒS.positionPercent(15, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(
        characters.igPilotin,
        "Ich war im großen Krieg, bevor Trojoko zu einer friedlichen Stadt wurde, Kampfpilotin eines ZPF-3 Kampffliegers."
      );
      await ƒS.Speech.tell(
        characters.igPilotin,
        "Nach dem Krieg kam ich zu der IG und wurde Transportpilotin, das müsste jetzt auch schon wieder 25 Jahre her sein."
      );

      await ƒS.Character.hide(characters.igPilotin);

      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.igPilotin,
        characters.igPilotin.pose.neutral,
        ƒS.positionPercent(15, 100)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.player, "Sind sie gern Pilotin?");

      await ƒS.Character.hide(characters.igPilotin);

      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.igPilotin,
        characters.igPilotin.pose.happy,
        ƒS.positionPercent(15, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.igPilotin,
        "Ich liebe das fliegen, als Kampfpilotin war es etwas merkwürdig, aber jetzt als Transportpilotin gibt es nichts Schöneres."
      );
      await ƒS.Speech.tell(
        characters.player,
        "Wie lang brauchen wir noch bis OmegaXV?"
      );
      await ƒS.Speech.tell(
        characters.player,
        "Wir haben die hälfte geschafft, noch etwas Geduld."
      );
      await ƒS.Speech.tell(characters.narrator, "Plötzlich eine Explosion.");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Character.hide(characters.igPilotin);
      await ƒS.update(1);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.narrator, "Du betrachtest Sofi näher.");
      await ƒS.Speech.tell(
        characters.narrator,
        "Sofi verhält sich anders als sonst."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Sofi sitzt in einer Ecke und hämmert etwas in ihren Computer."
      );
      await ƒS.Speech.tell(characters.narrator, "Süß die Kleine.");

      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sofi,
        characters.sofi.pose.sad,
        ƒS.positionPercent(70, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.sofi,
        "Was hast du alter Sack gerade gesagt?"
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
      await ƒS.Speech.tell(characters.narrator, "Nichts nichts, ich muss los.");
      await ƒS.Speech.tell(
        characters.narrator,
        "Scheint schlechte Laune zu haben, ich lasse sie lieber in Ruhe."
      );
      await ƒS.Speech.tell(characters.narrator, "Plötzlich eine Explosion.");

      await ƒS.Character.hide(characters.sprecher);
      await ƒS.Character.hide(characters.sofi);
      await ƒS.update(1);
      ƒS.Sound.play(sounds.ex, 1, false);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.c) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.narrator,
        gameProgress.playername + " fühlt sich hier sehr familiär."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Überall Server und bunte Lichter die blinken."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Frag mich nichts Genaues, ich kenn mich damit nichts aus ..."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Im letzten Semester habe ich Raumfahrttechnik gegen Hauswirtschaft getauscht."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Du gehst an einen der PCs und versuchst dich einzuloggen."
      );
      await ƒS.Speech.tell(
        characters.system,
        "Log-in Daten fehlerhaft, System gesperrt."
      );
      await ƒS.Speech.tell(
        characters.system,
        "Könntest du die Finger bitter vom Hauptrechner lassen!"
      );
      await ƒS.Speech.tell(characters.narrator, "Plötzlich eine Explosion.");
      ƒS.Sound.play(sounds.ex, 1, false);
      await ƒS.Character.hide(characters.sprecher);
      await ƒS.update(1);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.d) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.narrator, "Ein Raum voller Kisten.");
      await ƒS.Speech.tell(
        characters.narrator,
        "In den Kisten befindet sich Werkzeug, mit dem " +
          gameProgress.playername +
          " nichts anfangen kann."
      );
      await ƒS.Speech.tell(characters.narrator, "Plötzlich eine Explosion.");
      await ƒS.Character.hide(characters.sprecher);
      await ƒS.update(1);
      ƒS.Sound.play(sounds.ex, 1, false);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.e) {
      // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
      await ƒS.Character.show(
        characters.sprecher,
        characters.sprecher.pose.happy,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update(1);

      await ƒS.Speech.tell(
        characters.narrator,
        "Ein riesiger Tank erstreckt sich durch den kompletten Raum."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Ins Auge sticht ein großes, leicht entzündliches Zeichen."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Am Mittelpunkt des Tanks ist ein kleiner 4-eckiger Kasten befestigt."
      );
      await ƒS.Speech.tell(characters.narrator, "5:00");
      await ƒS.Speech.tell(characters.narrator, "4:59");
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

      await ƒS.Speech.tell(characters.narrator, "4:58");
      await ƒS.Speech.tell(characters.narrator, "4:57");
      await ƒS.Speech.tell(characters.narrator, "4:56");
      await ƒS.Speech.tell(
        characters.narrator,
        gameProgress.playername +
          " kennt sich überhaupt nicht mit Bomben aus, er erkennt aber, dass es eine ist."
      );
    }

    let choices2 = {
      a: "Bombe entschärfen",
      b: "*Zurück zum Passagierdeck*",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Du hast keine Ahnung, wie das geht, die Bombe explodiert."
      );
      ƒS.Sound.play(sounds.ex, 1, false);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Zurück auf dem Passagierdeck bemerkt " +
          gameProgress.playername +
          ", dass Sofi und David verschwunden sind."
      );
      await ƒS.Speech.tell(characters.narrator, "2:40");
    }

    let choices3 = {
      a: "*Pilotin informieren*",
      b: "*Fluchtkapsel suchen*",
    };
    let selectedChoice3 = await ƒS.Menu.getInput(choices3, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice3 == choices3.a) {
      await ƒS.Speech.tell(characters.narrator, "2:00");
      await ƒS.Speech.tell(
        characters.player,
        "Hinten im Flieger ist eine Bombe."
      );
      await ƒS.Speech.tell(
        characters.igPilotin,
        "Wo hinten? Wir müssen das Schiff sofort verlassen!"
      );
      await ƒS.Speech.tell(characters.narrator, "0:50");
      await ƒS.Speech.tell(
        characters.player,
        "Hinten an den Tanks, okay, wo sind die Fluchtkapseln?"
      );
      await ƒS.Speech.tell(characters.narrator, "0:10");
      await ƒS.Speech.tell(characters.igPilotin, "Hinten auf dem le….");
      await ƒS.Speech.tell(characters.igPilotin, "0:00");
      await ƒS.Speech.tell(
        characters.igPilotin,
        "Du bist in den Weiten des Weltalls gestorben."
      );
      ƒS.Sound.play(sounds.ex, 1, false);
      let currentScenceId = "015";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices3.b) {
      await ƒS.Speech.tell(characters.narrator, "2:00");
      await ƒS.Speech.tell(
        characters.narrator,
        "Du kennst dich auf dem Schiff nicht aus."
      );
      await ƒS.Speech.tell(characters.narrator, "1:00");
      await ƒS.Speech.tell(
        characters.narrator,
        "Ganz hinten im Schiff findet " +
          gameProgress.playername +
          " eine von 3 Fluchtkapseln."
      );
      await ƒS.Speech.tell(characters.narrator, "Zwei sind bereits weg.");
      await ƒS.Speech.tell(characters.narrator, "0:10");
      await ƒS.Speech.tell(
        characters.narrator,
        gameProgress.playername +
          " schafft es im letzten Moment mit der Fluchtkapsel sich in Sicherheit zu bringen."
      );
      await ƒS.Speech.tell(
        characters.narrator,
        "Durch die massive Schockwelle stößt er seinen Kopf und wir bewusstlos."
      );
    }

    await ƒS.Character.hide(characters.sprecher);

    ƒS.Sound.fade(sounds.space, 0, 1, false);
    await ƒS.update(1);
  }
}
