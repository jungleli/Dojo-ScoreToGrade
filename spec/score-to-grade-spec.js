describe('test',function(){
    it("Input score 90",function(){
        expect(scoreToGrade(90)).toBe('S');
    });
    it("Input score 86",function(){
        expect(scoreToGrade(86)).toBe('A');
    });
    it("Input score 76",function(){
        expect(scoreToGrade(76)).toBe('B');
    });
    it("Input score 66",function(){
        expect(scoreToGrade(66)).toBe('C');
    });
    it("Input score 6",function(){
        expect(scoreToGrade(6)).toBe('D');
    });
    it('Input a character',function(){
        expect(function(){scoreToGrade('s')})
            .toThrowError("Input error!");
    });
    it('Input an error score, 101',function(){
        expect(function(){scoreToGrade(101)})
            .toThrowError("Not a correct score");
    });
    it('Input an error score, -10',function(){
        expect(function(){scoreToGrade(-10)})
            .toThrowError("Not a correct score");
    });

});

