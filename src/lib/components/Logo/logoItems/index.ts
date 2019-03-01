import { drweb } from "./LogoDrweb.tsx";
import { eset } from "./LogoEset.tsx";
import { wargaming } from "./LogoWargaming.tsx";
import { worldOfTanks } from "./LogoWorldOfTanks.tsx";
import {worldOfWarships} from "./LogoWorldOfWarships.tsx";
import {worldOfWarplanets} from "./LogoWorldOfWarplanets.tsx";
import {warface} from "./LogoWarface.tsx";
import {logoGame} from "./LogoGame.tsx";
import {fourGameMain} from "./Logo4GameMain.tsx";
import {logoRT} from "./LogoRT.tsx";

import { ILogoComponentItemList } from "./logoItems.interface";


export const listOfLogos: ILogoComponentItemList = {};

export const listOfLogosNames = {};


listOfLogos[drweb.name] = drweb.component;
listOfLogos[eset.name] = eset.component;
listOfLogos[wargaming.name] = wargaming.component;
listOfLogos[worldOfTanks.name] = worldOfTanks.component;
listOfLogos[worldOfWarships.name] = worldOfWarships.component;
listOfLogos[worldOfWarplanets.name] = worldOfWarplanets.component;
listOfLogos[warface.name] = warface.component;
listOfLogos[logoGame.name] = logoGame.component;
listOfLogos[fourGameMain.name] = fourGameMain.component;
listOfLogos[logoRT.name] = logoRT.component;











