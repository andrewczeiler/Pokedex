import * as gfx from 'gophergfx'

export class Mine extends gfx.ShapeInstance
{
    private exploding: boolean;
    private explodeAlpha: number;

    constructor(baseShape: gfx.Shape, copyTransform = true)
    {
        super(baseShape, copyTransform);

        this.material = new gfx.Material2();
        this.material.copy(baseShape.material);

        this.exploding = false;
        this.explodeAlpha = 0;
    }

    update(deltaTime: number)
    {
        const explodeTime = .25;

        if(this.exploding)
        {
            this.explodeAlpha += deltaTime / explodeTime;
            this.material.color.set(1, (1 - this.explodeAlpha), (1 - this.explodeAlpha), 1);

            if(this.explodeAlpha >= 1.0)
            {
                this.remove();
            }
        }
    }

    explode(): void
    {
        this.exploding = true;
    }

    isExploding(): boolean
    {
        return this.exploding;
    }
}