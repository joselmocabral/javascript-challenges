function songDecoder(song) {
  //console.log(song.split("WUB").join(' '));
  return song
    .split("WUB")
    .filter(x => x != "")
    .join(" ");
}
