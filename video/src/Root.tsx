import type { ComponentType } from "react";
import { Composition } from "remotion";
import { ElvinDake } from "./videos/ElvinDake";
import { PIXL } from "./videos/PIXL";
import { TFSpace } from "./videos/TFSpace";
import { FPS, HEIGHT, WIDTH } from "./tokens";
import videos from "./videos.json";

const components: Record<string, ComponentType> = { TFSpace, ElvinDake, PIXL };

export const RemotionRoot: React.FC = () => (
  <>
    {videos.map((video) => (
      <Composition
        key={video.id}
        id={video.id}
        component={components[video.id]}
        durationInFrames={video.durationInFrames}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    ))}
  </>
);
