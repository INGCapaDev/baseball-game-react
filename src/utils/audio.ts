import sinstrike from "./sinstrike";
import unstrike from "./unstrike";
import dosstrike from "./dosstrike";

type PlayAudio = {
  strike: any;
  ball: any;
};

// beis 

const audioFunc =
  (yellow: number, blue: number, red: number, nextAudio?: PlayAudio) =>
  (outs: number, action: "ball" | "strike") => {
    return {
      audio:
        outs == 0
          ? sinstrike[yellow]
          : outs == 1
          ? unstrike[blue]
          : dosstrike[red],
      nextAudio,
    };
  };

const audios = {
  strike: audioFunc(1, 1, 1, {
    strike: audioFunc(2, 2, 2, {
      strike: audioFunc(3, 3, 3),
      ball: audioFunc(4, 4, 4, {
        strike: audioFunc(5, 5, 5),
        ball: audioFunc(6, 6, 6, {
          strike: audioFunc(7, 7, 7),
          ball: audioFunc(8, 8, 8, {
            strike: audioFunc(9, 9, 9),
            ball: audioFunc(10, 10, 10),
          }),
        }),
      }),
    }),
    ball: audioFunc(11, 11, 11, {
      strike: audioFunc(12, 12, 12, {
        strike: audioFunc(13, 13, 13),
        ball: audioFunc(14, 14, 14, {
          strike: audioFunc(15, 15, 15),
          ball: audioFunc(16, 16, 16, {
            strike: audioFunc(17, 17, 17),
            ball: audioFunc(18, 18, 18),
          }),
        }),
      }),
      ball: audioFunc(19, 19, 19, {
        strike: audioFunc(20, 20, 20, {
          strike: audioFunc(24, 24, 24),
          ball: audioFunc(23, 23, 23, {
            strike: audioFunc(25, 25, 25),
            ball: audioFunc(26, 26, 26),
          }),
        }),
        ball: audioFunc(21, 21, 21, {
          strike: audioFunc(22, 22, 22, {
            strike: audioFunc(27, 16, 26),
            ball: audioFunc(28, 28, 28),
          }),
          ball: audioFunc(29, 29, 29),
        }),
      }),
    }),
  }),
  ball: audioFunc(30, 30, 30, {
    strike: audioFunc(31, 31, 31, {
      strike: audioFunc(32, 32, 32, {
        strike: audioFunc(33, 33, 33),
        ball: audioFunc(34, 34, 34, {
          strike: audioFunc(35, 35, 35),
          ball: audioFunc(36, 36, 36, {
            strike: audioFunc(37, 37, 37),
            ball: audioFunc(38, 38, 38)
          })
        })
      }),
      ball: audioFunc(39, 39, 39, {
        strike: audioFunc(40, 40, 40, {
          strike: audioFunc(41, 41, 41),
          ball: audioFunc(42, 42, 42, {
            strike: audioFunc(43, 43, 43),
            ball: audioFunc(44, 44, 44)
          })
        }),
        ball: audioFunc(45, 45, 45, {
          strike: audioFunc(46, 46, 46, {
            strike: audioFunc(47, 47, 47),
            ball: audioFunc(49, 49, 49),
          }),
          ball: audioFunc(48, 48, 48),
        }),
      }),
    }),
    ball: audioFunc(50, 50, 50, {
      strike: audioFunc(51, 51, 51, {
        strike: audioFunc(52, 52, 52, {
          strike: audioFunc(53, 53, 53),
          ball: audioFunc(54, 54, 54, {
            strike: audioFunc(55, 55, 55),
            ball: audioFunc(56, 56, 56),
          }),
        }),
        ball: audioFunc(57, 57, 57, {
          strike: audioFunc(58, 58, 58, {
            strike: audioFunc(59, 59, 59),
            ball: audioFunc(60, 60, 60),
          }),
          ball: audioFunc(61, 61, 61),
        }),
      }),
      ball: audioFunc(62, 62, 62, {
        strike: audioFunc(63, 63, 63, {
          strike: audioFunc(64, 64, 64, {
            strike: audioFunc(65, 65, 65),
            ball: audioFunc(66, 66, 66),
          }),
          ball: audioFunc(68, 68, 68),
        }),
        ball: audioFunc(67, 67, 67),
      }),
    }),
  }),
};

let currentAudio: PlayAudio = audios;

const nextAudio = (outs: number, action: "ball" | "strike") => {
  const audioAction = currentAudio[action];

  const playAudio = audioAction(outs, action);

  if(!playAudio.nextAudio){
    currentAudio = audios
  }else{
    currentAudio = playAudio.nextAudio;
  }

  return playAudio.audio;
};

export default {
  currentAudio,
  playAudio: nextAudio,
  resetAudios: () => (currentAudio = audios),
};
