namespace VisualNovel {
  export async function SceneGameOver(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.gameover);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );



    await ƒS.Character.show(
      characters.game,
      characters.game.pose.angry,
      ƒS.positions.center
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, "Schade, war wohl nix!");
    await ƒS.Character.hide(characters.game);
    await ƒS.update(1);

    // Jumps to this scence
    return gameProgress.gameOverSceneId;
  }
}
