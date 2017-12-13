import KeyboardListener from './keyboardState';

export default function setupKeyboard(cosmo) {
    const input = new KeyboardListener();

    input.addMapping('Space', keyState => {
        if (keyState) {
            cosmo.jump.start();
        } else {
            cosmo.jump.cancel();
        }
    });

    input.addMapping('KeyO', keyState => {
        cosmo.slowAndTurbo(keyState);
    });
    input.addMapping('KeyP', keyState => {
        cosmo.turboAndSlow(keyState);
    });

    input.addMapping('ArrowRight', keyState => {
        cosmo.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', keyState => {
        cosmo.go.dir += keyState ? -1 : 1;
    });

    return input;
}