// javascript/typescript 프로젝트 번들링하기 위한 rollup 설정

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts", // 메인 엔트리 경로
  output: [
    // CommonJS 형식으로 dist/index.js 생성
    // 소스맵 생성
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    // ES Module 형식으로 dist/index.esm.js 생성
    // 소스맵 생성
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // peerDependencies에 있는 모듈을 외부 모듈로 처리 - 번들링에 포함되지 않음
    resolve(), // 모듈 경로 해석
    commonjs(), // CommonJS 모듈을 ES6 Module로 변환
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "./dist",
        },
      },
      clean: true,
    }), // typescript 파일을 컴파일, 선언 파일( .d.ts ) 생성
    json(), // json 파일을 읽어오는 플러그인
    terser(), // 코드 압축, 난독화
  ],
};
