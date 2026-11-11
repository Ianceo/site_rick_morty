// Gulpfile: orquestra as tarefas de desenvolvimento e build do projeto.
// Uso:
//   npx gulp          -> servidor de desenvolvimento (Vite)
//   npx gulp build    -> gera a pasta dist/
//   npx gulp watch    -> observa src/ e index.html e reconstrói ao salvar
//   npx gulp preview  -> serve a pasta dist/ para conferir o resultado
//   npx gulp check    -> verifica se os arquivos essenciais existem
import gulp from "gulp";
import { spawn } from "child_process";
import fs from "fs";

const run = (command, args = []) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} saiu com código ${code}`))
    );
  });

// Build de produção (Vite gera dist/index.html com CSS e JS embutidos)
export function build() {
  return run("npm", ["run", "build"]);
}

// Servidor de desenvolvimento
export function serve() {
  return run("npx", ["vite"]);
}

// Preview da pasta dist
export function preview() {
  return run("npx", ["vite", "preview"]);
}

// Observa mudanças e reconstrói o dist
export function watchFiles() {
  gulp.watch(["index.html", "src/**/*.{js,css}"], build);
  console.log("[gulp] Observando index.html e src/ ...");
  return Promise.resolve();
}

// Verifica a presença dos arquivos principais
export function check(done) {
  const required = ["index.html", "src/js/main.js", "src/js/data.js", "src/css/style.css"];
  const missing = required.filter((file) => !fs.existsSync(file));
  if (missing.length) {
    return done(new Error(`Arquivos ausentes: ${missing.join(", ")}`));
  }
  console.log("[gulp] Todos os arquivos essenciais estão presentes.");
  done();
}

export default gulp.series(check, serve);
