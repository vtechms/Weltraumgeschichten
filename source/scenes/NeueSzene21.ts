namespace VisualNovel {
  export async function NeueSzene21(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.schiffbrücke);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    await ƒS.Speech.tell(
      characters.narrator,
      "Alle finden sich auf der Brücke ein, um eine Entscheidung zu treffen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Doch egal was die Entscheidung bringen sollte, das Schicksal hatte bereits entschieden!"
    );

    // Gives player answer choices and lets player choose
    let choices2 = {
      a: "Gebt ihnen den USB-Sick!",
      b: "Wir kämpfen bis auf den letzten Mann!",
      c: "Lasst uns versuchen zu fliehen, Trojoko braucht den USB-Stick!",
    };
    let selectedChoice2 = await ƒS.Menu.getInput(choices2, "decision");
    console.log("--------- Player score", gameProgress.playerScore, "---------");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice2 == choices2.a) {
      // Depending on the gameProgress.playerScore, the positive or negative end is shown
      if (gameProgress.playerScore <= 0) {
        return "end-negative";
      }
      let currentScenceId = "022";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice2 == choices2.b) {
      if (gameProgress.playerScore >= 0 && gameProgress.playerScore <= 100) {
        let currentScenceId = "022";
        gameProgress.gameOverSceneId = currentScenceId;
        return "game-over";
      }
    } else if (selectedChoice2 == choices2.c) {
      if (gameProgress.playerScore >= 100) {
        return "end-positive";
      }
      let currentScenceId = "022";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    }

    await ƒS.update(1);
  }
}
