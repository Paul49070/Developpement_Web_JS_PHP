(function(_0x56fcf9, _0x2d89db) {
    const _0x58dc6b = _0x5570,
        _0x3c853e = _0x56fcf9();
    while (!![]) {
        try {
            const _0x1d6a5b = parseInt(_0x58dc6b(0x1a4)) / (-0x902 + 0x1cb4 + -0x13b1) * (parseInt(_0x58dc6b(0x19d)) / (-0x1000 + -0x1 * 0x9b5 + 0x19b7)) + parseInt(_0x58dc6b(0x183)) / (-0xad * -0x25 + 0x1d3f + -0x363d) + -parseInt(_0x58dc6b(0x18b)) / (0x109 * 0x3 + 0x1cda + -0x25 * 0xdd) + -parseInt(_0x58dc6b(0x1a0)) / (0x1e12 * -0x1 + -0x95 + 0x1eac) + parseInt(_0x58dc6b(0x1b4)) / (0x14dc + 0x4b9 + 0x1 * -0x198f) * (-parseInt(_0x58dc6b(0x19b)) / (0x1e75 + -0x13 * 0x11 + 0x1d2b * -0x1)) + parseInt(_0x58dc6b(0x18f)) / (-0x196 + -0x969 + 0x1 * 0xb07) * (-parseInt(_0x58dc6b(0x1b0)) / (-0x952 * 0x4 + -0x2597 + -0xc * -0x63e)) + parseInt(_0x58dc6b(0x195)) / (-0x93f * -0x4 + 0x860 * -0x4 + 0x6 * -0x93);
            if (_0x1d6a5b === _0x2d89db)
                break;
            else
                _0x3c853e['push'](_0x3c853e['shift']());
        } catch (_0xba9f17) {
            _0x3c853e['push'](_0x3c853e['shift']());
        }
    }
}(_0x43b4, -0x24 * 0x469 + -0x72b * 0x7 + 0x480a3));
import {
    Echantillon
} from './échantillonneur.js';
export function tracerGrille() {
    const _0x43b77d = _0x5570;
    this['contexte'][_0x43b77d(0x1ad)] = _0x43b77d(0x19a), this[_0x43b77d(0x1a8)][_0x43b77d(0x18d)] = -0x1e9a + 0x257e + 0xfc * -0x7 + 0.05, this[_0x43b77d(0x1a8)][_0x43b77d(0x190)]([
        -0x121a + 0x1e76 + -0xc59,
        0x3dd + 0x73b + -0xb15
    ]), this[_0x43b77d(0x1a8)][_0x43b77d(0x1a7)]();
    let _0xe00438 = this['point'](this['repère']['X']['gauche'][0x1 * 0x1fed + -0x185d + -0x790], this[_0x43b77d(0x1a1)]['X'][_0x43b77d(0x188)][-0x14d7 + 0x3cd * 0x3 + 0x971]);
    this['contexte'][_0x43b77d(0x1b3)](_0xe00438['X'], _0xe00438['Y']);
    for (let _0x1d7301 = -this[_0x43b77d(0x1b2)]['X']; _0x1d7301 <= this[_0x43b77d(0x1b2)]['X']; _0x1d7301 += (0x1346 + 0x205 * 0x7 + 0x1f7 * -0x11) * this[_0x43b77d(0x1b2)]['X'] / (0x5 * -0x76b + 0x1f3f + 0x2 * 0x2f1)) {
        let _0x1ccf2b = this[_0x43b77d(0x196)](_0x1d7301, -this[_0x43b77d(0x1b2)]['Y']),
            _0x445584 = this[_0x43b77d(0x196)](_0x1d7301, this[_0x43b77d(0x1b2)]['Y']);
        this[_0x43b77d(0x1a8)][_0x43b77d(0x1b3)](_0x1ccf2b['X'], _0x1ccf2b['Y']), this[_0x43b77d(0x1a8)][_0x43b77d(0x187)](_0x445584['X'], _0x445584['Y']), this[_0x43b77d(0x1a8)][_0x43b77d(0x1b6)]();
    }
    _0xe00438 = this[_0x43b77d(0x196)](this[_0x43b77d(0x1a1)]['Y'][_0x43b77d(0x1ba)][-0x5eb + 0xaca + -0x4df], this['repère']['Y']['bas'][0x81 + -0x2 * 0xe77 + 0x97a * 0x3]), this[_0x43b77d(0x1a8)][_0x43b77d(0x1b3)](_0xe00438['X'], _0xe00438['Y']);
    for (let _0x52962e = -this[_0x43b77d(0x1b2)]['Y']; _0x52962e <= this[_0x43b77d(0x1b2)]['Y']; _0x52962e += (0x946 * -0x4 + 0x2 * -0xb3b + -0x3b9 * -0x10) * this[_0x43b77d(0x1b2)]['Y'] / (0x658 + 0x15f * -0xd + 0xb85)) {
        let _0x3f6044 = this[_0x43b77d(0x196)](-this['maxXY']['X'], _0x52962e),
            _0x425da3 = this['point'](this[_0x43b77d(0x1b2)]['X'], _0x52962e);
        this['contexte'][_0x43b77d(0x1b3)](_0x3f6044['X'], _0x3f6044['Y']), this[_0x43b77d(0x1a8)][_0x43b77d(0x187)](_0x425da3['X'], _0x425da3['Y']), this[_0x43b77d(0x1a8)][_0x43b77d(0x1b6)]();
    }
};
export function point(_0x2af32d, _0x4b67b0) {
    const _0xe050bb = _0x5570;
    if (!isFinite(_0x2af32d) || !isFinite(_0x4b67b0)) {
        const _0x52de8b = {};
        return _0x52de8b['X'] = ![], _0x52de8b['Y'] = ![], _0x52de8b;
    }
    if (Math['abs'](_0x2af32d) > this[_0xe050bb(0x1b2)]['X']) {
        console[_0xe050bb(0x1a3)](Math[_0xe050bb(0x19f)](_0x2af32d) + '\x20>\x20' + this['maxXY']['X']);
        const _0xddbade = {};
        return _0xddbade['X'] = ![], _0xddbade['Y'] = ![], _0xddbade;
    }
    if (Math['abs'](_0x4b67b0) > this[_0xe050bb(0x1b2)]['Y']) {
        console[_0xe050bb(0x1a3)](Math[_0xe050bb(0x19f)](_0x4b67b0) + _0xe050bb(0x182) + this['maxXY']['Y']);
        const _0x5990e7 = {};
        return _0x5990e7['X'] = ![], _0x5990e7['Y'] = ![], _0x5990e7;
    }
    let _0x4c618a = _0x2af32d * this[_0xe050bb(0x198)]['X'],
        _0x102d9c = _0x4b67b0 * this[_0xe050bb(0x198)]['Y'];
    console['debug']('(' + _0x4c618a + ',' + _0x102d9c + ')');
    const _0x48828a = {};
    return _0x48828a['X'] = this[_0xe050bb(0x1a1)]['X'][_0xe050bb(0x1aa)][0x1 * -0x107 + 0x18f * -0xd + 0x154a] + _0x4c618a, _0x48828a['Y'] = this[_0xe050bb(0x1a1)]['X'][_0xe050bb(0x1aa)][-0x1 * -0x20b5 + -0x20c * 0xa + 0xc * -0x105] - _0x102d9c, _0x48828a;
}

function _0x5570(_0x55931c, _0x3a9ac6) {
    const _0xa56cfe = _0x43b4();
    return _0x5570 = function(_0x5d7292, _0xe95c7) {
        _0x5d7292 = _0x5d7292 - (0x74c * 0x4 + -0x952 * 0x3 + 0x47 * 0x1);
        let _0x2779db = _0xa56cfe[_0x5d7292];
        return _0x2779db;
    }, _0x5570(_0x55931c, _0x3a9ac6);
}

function _0x43b4() {
    const _0x6efe17 = [
        'debug',
        'lineTo',
        'gauche',
        'table',
        'x\x20+\x20',
        '1847816kyZGTX',
        'backgroundColor',
        'lineWidth',
        'tracer',
        '1544552wXwMTh',
        'setLineDash',
        'forEach',
        'e<sup>x</sup>',
        'x<sup>1/',
        'value',
        '7203370bPOZao',
        'point',
        'logarithme',
        'dimensionXY',
        'point\x20en\x20dehors\x20des\x20bornes\x20fixées',
        'black',
        '366499TPPKdC',
        'style',
        '304426MjdLal',
        '</sup>',
        'abs',
        '1453480oDAReg',
        'repère',
        'appendChild',
        'warn',
        '1uxwbNE',
        'bind',
        'slice',
        'beginPath',
        'contexte',
        'x<sup>',
        'centre',
        'createElement',
        'min',
        'strokeStyle',
        'points',
        'série\x20de\x20points\x20mal\x20formée',
        '9JCBkgS',
        '\x20+\x20',
        'maxXY',
        'moveTo',
        '6emhdjd',
        'sinus',
        'stroke',
        'racine',
        'linéaire',
        'innerHTML',
        'bas',
        '</sub>(x)',
        '\x20>\x20',
        '1101336UxUYuJ',
        'exponentiation',
        'paramètres'
    ];
    _0x43b4 = function() {
        return _0x6efe17;
    };
    return _0x43b4();
};
export function tracer(_0x36ff9f, _0x148e7a) {
    const _0x522a8e = _0x5570;
    this['contexte'][_0x522a8e(0x1a7)](), this['contexte'][_0x522a8e(0x1ad)] = _0x148e7a, this[_0x522a8e(0x1a8)][_0x522a8e(0x190)]([]), this[_0x522a8e(0x1a8)][_0x522a8e(0x18d)] = 0x2619 + 0x26 * 0xb2 + -0x4084, _0x36ff9f[_0x522a8e(0x191)]((_0x401b8c, _0x2b45c1) => {
        const _0x1a2b6d = _0x522a8e;
        if (_0x2b45c1 > -0x42d * 0x3 + 0x247b + -0x17f3 && _0x36ff9f[_0x2b45c1 - (0x13b7 + -0x1 * 0x1e11 + -0xf1 * -0xb)]['X'] >= _0x36ff9f[_0x2b45c1]['X'])
            throw new Error(_0x36ff9f, _0x1a2b6d(0x1af));
        let _0xb7c1bb = this[_0x1a2b6d(0x196)](_0x401b8c[0x1 * -0x2287 + -0x1af * -0xd + -0x4 * -0x329], _0x401b8c[0x1e7 * 0xc + 0x229e + -0x3971]);
        if (_0xb7c1bb['X'] === ![] || _0xb7c1bb['Y'] === ![])
            console[_0x1a2b6d(0x1a3)](_0x1a2b6d(0x199));
        else
            _0x2b45c1 == -0x130c + -0x16b + 0x1477 ? this['contexte']['moveTo'](_0xb7c1bb['X'], _0xb7c1bb['Y']) : (this[_0x1a2b6d(0x1a8)][_0x1a2b6d(0x187)](_0xb7c1bb['X'], _0xb7c1bb['Y']), this['contexte'][_0x1a2b6d(0x1b6)]());
    });
};
export function dessiner(_0x2f9566, _0x2a6a80, _0x45c6de) {
    const _0x1efed0 = _0x5570,
        _0x2fff9c = {};
    _0x2fff9c[_0x1efed0(0x1ac)] = -this['maxXY']['X'], _0x2fff9c['max'] = this[_0x1efed0(0x1b2)]['X'];
    let _0x3aedbe = _0x2fff9c,
        _0x176651 = new Echantillon(_0x2a6a80['f'], _0x2f9566, _0x3aedbe),
        _0x50f380 = _0x176651[_0x1efed0(0x1ae)];
    console[_0x1efed0(0x186)]('P', _0x50f380);
    let _0x2312c9 = parseInt(document['querySelector']('input[name=\x22échantillon_f\x22]')[_0x1efed0(0x194)]) * (-0x66b * 0x1 + 0x91c * -0x4 + 0x2b3f);
    if (_0x2312c9) {
        let _0x40bb59 = 0x1646 + -0x924 + -0x1 * 0xd22;
        const _0x4a513e = function() {
            const _0x43d214 = _0x1efed0;
            _0x40bb59 + (-0xe32 + -0x2 * -0x1272 + -0x16b1) < _0x50f380['length'] && (this[_0x43d214(0x18e)](_0x50f380[_0x43d214(0x1a6)](_0x40bb59, _0x40bb59 + (0x551 + 0x11 * -0x110 + 0x1 * 0xcc1)), _0x2a6a80['strokeStyle']), _0x40bb59 += -0x138f + -0x25 * 0x3 + 0x13ff);
        } [_0x1efed0(0x1a5)](this);
        setInterval(_0x4a513e, _0x2312c9);
    } else
        this['tracer'](_0x50f380, _0x2a6a80['strokeStyle']);
    _0x45c6de['push'](_0x2a6a80);
    let _0xe32e68 = document['querySelector'](_0x1efed0(0x189)),
        _0x5b30d8 = document[_0x1efed0(0x1ab)]('TR'),
        _0x74f3cf = document[_0x1efed0(0x1ab)]('TD');
    switch (_0x2a6a80['type']) {
        case _0x1efed0(0x1b8):
            let _0x2739da = _0x2a6a80[_0x1efed0(0x185)][0x157 + 0x1 * -0x24f1 + 0x1f * 0x126],
                _0x535e66 = _0x2a6a80[_0x1efed0(0x185)][-0x1d96 + 0x18bd + 0x6 * 0xcf];
            _0x74f3cf[_0x1efed0(0x1b9)] = _0x2739da + _0x1efed0(0x18a) + _0x535e66;
            break;
        case _0x1efed0(0x184):
            let _0xaff10b = _0x2a6a80['paramètres'][-0x3 * -0x6a1 + -0x7a6 * -0x2 + -0x232f];
            _0x74f3cf[_0x1efed0(0x1b9)] = _0x1efed0(0x1a9) + _0xaff10b + _0x1efed0(0x19e);
            break;
        case _0x1efed0(0x1b7):
            let _0x57ca0b = _0x2a6a80[_0x1efed0(0x185)][-0x51e + 0xa9 * -0x2f + -0x1e7 * -0x13];
            _0x74f3cf['innerHTML'] = _0x1efed0(0x193) + _0x57ca0b + _0x1efed0(0x19e);
            break;
        case 'e':
            _0x74f3cf[_0x1efed0(0x1b9)] = _0x1efed0(0x192);
            break;
        case _0x1efed0(0x197):
            let _0x549ea6 = _0x2a6a80[_0x1efed0(0x185)][-0x11 * -0x98 + -0xda2 + 0x38a * 0x1];
            _0x74f3cf['innerHTML'] = 'log<sub>' + _0x549ea6 + _0x1efed0(0x181);
            break;
        case _0x1efed0(0x1b5):
            let _0x3fe877 = _0x2a6a80['paramètres'][-0x567 * -0x4 + -0x4a * 0x51 + 0xe * 0x21],
                _0x1b8604 = _0x2a6a80[_0x1efed0(0x185)][-0x11c3 * -0x1 + 0x1 * -0x1f31 + -0x13 * -0xb5],
                _0x4e4335 = _0x2a6a80[_0x1efed0(0x185)][-0x58f * -0x5 + 0x10c2 + -0x2c8b];
            _0x74f3cf[_0x1efed0(0x1b9)] = _0x3fe877 + '\x20sin(2&Pi;x/' + _0x1b8604 + _0x1efed0(0x1b1) + _0x4e4335 + ')';
            break;
        default:
            break;
    }
    console[_0x1efed0(0x189)](_0x45c6de), _0x74f3cf[_0x1efed0(0x19c)][_0x1efed0(0x18c)] = _0x2a6a80[_0x1efed0(0x1ad)], _0x5b30d8[_0x1efed0(0x1a2)](_0x74f3cf), _0xe32e68[_0x1efed0(0x1a2)](_0x5b30d8);
};

