import typescript from 'rollup-plugin-typescript2'

export default ['es', 'cjs'].map(format => ({
    input: 'modules/Path.ts',
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            clean: true,
            tsconfigOverride: format === 'es' ? {
                compilerOptions: {
                    module: 'esnext',
                    target: 'esnext',
                },
            } : undefined,
        })
    ],
    output: {
        name: 'Path',
        format,
        file: `dist/${format}/path-parser.js`
    }
}))
